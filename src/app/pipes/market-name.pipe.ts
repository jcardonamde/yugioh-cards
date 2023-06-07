import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketName'
})
export class MarketNamePipe implements PipeTransform {
  markets = [
    { id: 'amazon_price', name: 'Amazon' },
    { id: 'cardmarket_price', name: 'Cardmarket' },
    { id: 'coolstuffinc_price', name: 'Coolstuff Inc' },
    { id: 'ebay_price', name: 'Ebay' },
    { id: 'tcgplayer_price', name: 'TGC Player' },
  ];

  transform(value: string): string {
    const market = this.markets.find( m => m.id === value)
    // Puede ser un valor o una cadena vacia
    return market?.name || '';
  }

}
