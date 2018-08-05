import { Component, OnInit } from '@angular/core';
import { WidgetData } from '../../models/widget-data';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  public showImage = true;
  public widgets: WidgetData[] = [
    {
      name: 'Интересные каналы про Dota 2',
      images: [
        { url: '', rounded: true },
        { url: '', rounded: false },
        { url: '', rounded: false }
        ],
    },
    {
      name: 'Девушки-стримершы',
      images: [
        { url: '', rounded: false },
        { url: '', rounded: false },
        { url: '', rounded: false }
      ],
    },
    {
      name: 'Все что связано с Fortnite',
      images: [
        { url: '', rounded: false },
        { url: '', rounded: false },
        { url: '', rounded: false }
      ],
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
