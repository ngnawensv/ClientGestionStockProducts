import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  private baseUrl = "http://localhost:8080/produits";

  constructor(private httpClient: HttpClient) {}

  getProduits(): Observable<any> {
    return this.httpClient.get(this.baseUrl).pipe(
      map(resp => resp)
    );
  }
}