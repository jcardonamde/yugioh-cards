import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  // El ! significa que el valor va a llegar en caso de que no lo detecte como inicializado
  @Input() card!: Card;

  constructor (private router: Router) { }

  ngOnInit(): void {
  }

  goToCard() {
    this.router.navigate([`./card/${this.card.id}`]);
  }
}
