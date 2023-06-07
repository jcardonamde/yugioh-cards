import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // Inicializando variables
  cards: Card[] = [];
  offset = 0;

  // Anexamos FormControl para facilitar el buscador de cartas
  cardTextFC = new FormControl('');

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardTextFC.valueChanges.pipe(
      // Tiempo despues del que inicia la busqueda, esto se hace parar mejorar rendimiento
      debounceTime(1000)
    )
    .subscribe((res) => {
      // Añadiendo array para aportar la interactividad dinamica sin perder los datos de búsqueda
      this.cards = [];
      // Con esto hacemos una consulta al listado de cartas
      this.searchCards(res);
    });
    this.searchCards();
  }

  onScroll() {
    console.log("scrolled!!");
    this.offset += 100;
    this.searchCards();
  }

  // Función encargada de cargar las nuevas 100 cards
  searchCards(cardName: string | null = null) {
    this.cardService.getCards(cardName, this.offset).subscribe((res) => {
      console.log(res);
      this.cards = [...this.cards, ...res]; // Haciendo un merge entre las 2 respuestas
    });
  }
}
