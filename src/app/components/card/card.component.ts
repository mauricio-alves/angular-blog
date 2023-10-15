import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.responsive.component.css'],
})
export class CardComponent {
  @Input()
  cardImage: string = '';
  @Input()
  cardDate: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardId: number = 0;
}
