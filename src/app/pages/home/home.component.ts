import { mockData } from '../../data/mockData';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css'],
})
export class HomeComponent {
  mainCardData = mockData.slice(0, 3);
  bottomCardData = mockData.slice(0, 4);
}
