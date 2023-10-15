import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: [
    './main-card.component.css',
    './main-card.responsive.component.css',
  ],
})
export class MainCardComponent {
  @Input()
  mainCardImage: string = '';
  @Input()
  mainCardDate: string = '';
  @Input()
  mainCardTitle: string = '';
  @Input()
  mainCardDescription: string = '';
  @Input()
  mainId: number = 0;
}
