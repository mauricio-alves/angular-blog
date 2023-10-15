import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockData } from '../../data/mockData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input()
  contentCardImage: string = '';
  @Input()
  contentCardDate: string = '';
  @Input()
  contentCardTitle: string = '';
  @Input()
  contentCardDescription: string = '';

  private id: number | null = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => (this.id = Number(value.get('id')))
    );

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: number | null) {
    const result = mockData.filter(
      (currentElement) => currentElement.id === id
    )[0];

    this.contentCardTitle = result.title;
    this.contentCardDescription = result.description;
    this.contentCardImage = result.image;
    this.contentCardDate = result.date;

    if (!result) {
      console.log('There is no data!');
    }
  }
}
