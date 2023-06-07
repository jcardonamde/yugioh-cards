import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  // Variable gloabl de la dirección del API Rest
  API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor(private http: HttpClient) { }

  getCards(name: string | null, offset = 0) {
    const params: any = {
      num:100,
      offset,
    };
    // Agregando parámetros para búsqueda por nombre de carta
    if(name) params.fname = name;
    return this.http
      .get<Card[]>(this.API_URL, { params })
      .pipe(map( (res: any) => res.data));
  }

  getCard(id: string) {
    const params = { id };
    return this.http.get(this.API_URL, {params})
    .pipe(map((res: any) => res.data[0]));
  }
}
