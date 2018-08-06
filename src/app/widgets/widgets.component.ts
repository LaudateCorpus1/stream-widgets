import { Component, OnInit } from '@angular/core';
import { WidgetData } from '../../models/widget-data';
import { WidgetDataService } from '../widget-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

  constructor(public widgetDataService: WidgetDataService) {
    this.widgetDataService.generateWidgets(3);
  }

  ngOnInit() {
  }

  toggleFavorite(widgetId: String) {
    this.widgetDataService.toggleFavorite(widgetId);
  }

  addWidget() {
    this.widgetDataService.generateWidgets(1);
  }

  get favorites() {
    return this.widgetDataService.favorites;
  }
}
