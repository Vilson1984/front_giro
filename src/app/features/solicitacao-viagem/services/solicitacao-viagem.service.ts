import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environment/environment';

interface RouteInfo {
  origin: string;
  destination: string;
  encodedPolyline?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SolicitacaoViagemService {
  googleApiKey = environment.GOOGLE_API_KEY;
  
  private enviaDadosOpcoes = new BehaviorSubject<any[]>([]);
  dadosOpcoes = this.enviaDadosOpcoes.asObservable();

  private routeSubject = new BehaviorSubject<RouteInfo | null>(null);
  route$ = this.routeSubject.asObservable();

  constructor(private http: HttpClient) {}
  estimateRide: any;

  calcularViagem(customer_id: string, origin: string, destination: string): Observable<any> {
    return this.http.post('http://localhost:3001/ride/estimate', {
      customer_id,
      origin,
      destination,
    });
  }

  getRoutePolyline(origin: string, destination: string, googleApiKey: string): Observable<string> {
    const params = new HttpParams()
      .set('origin', origin)
      .set('destination', destination)
      .set('mode', 'driving')
      .set('key', googleApiKey);

    return this.http.get<any>('https://maps.googleapis.com/maps/api/directions/json', { params }).pipe(
      map(response => response?.routes?.[0]?.overview_polyline?.points || '')
    );
  }

  enviaDados(dados: any, origin?: string, destination?: string, encodedPolyline?: string) {
    if (dados?.optionsDrivers) {
      this.enviaDadosOpcoes.next(dados.optionsDrivers);
    }

    if (origin && destination) {
      this.routeSubject.next({ origin, destination, encodedPolyline });
    }
  }
}
