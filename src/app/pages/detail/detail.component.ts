import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { Observable, tap } from 'rxjs';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id!: string;
  // Creo un Observable para suscribirme mediante HTML
  card$!: Observable<Card>;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    // Toma una captura del parámetro Id activo al momento
    this.id = this.route.snapshot.paramMap.get('id') || '';
    // Realizo la suscripción al observable creado previamente para recibir datos desde HTML
    this.card$ = this.cardService.getCard(this.id).pipe(tap(console.log));
    };
}

