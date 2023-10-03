import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosRegionalerService {

  private apiUrl = 'https://dev.matiivilla.cl/duoc/location/region'

  constructor(private http: HttpClient) { }

  obtenerDatosRegionales(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
