import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl = 'http://localhost:8000';
  constructor(private http: HttpClient){ }

  post(vehiculo : Vehiculo): Observable<Vehiculo>{
    return this.http.post<Vehiculo>(this.apiUrl+ '/vehiculos', vehiculo)
    .pipe(
      tap(_ => console.log('Vehiculo registrado')),
      catchError(error =>{
          console.log(error)
          return of(error)
      })
    );
  }

  get(): Observable <Vehiculo[]>{
    return this.http.get<Vehiculo[]>(this.apiUrl+'/vehiculos').pipe(
      tap(_ => console.log('Vehiculo Encontrado')),
      catchError(error =>{
        console.log("error al buscar")
        return of(error as Vehiculo[])
      })
      );
  
  }

}
