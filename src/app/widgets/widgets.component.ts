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
  public showImage = false;
  public $widgets: Observable<WidgetData[]>;

  constructor(private widgetDataService: WidgetDataService) {
    this.$widgets = this.widgetDataService.widgets;
    this.widgetDataService.generateWidgets(3);
  }

  ngOnInit() {
  }

  toggleFavorite(id: String) {
    this.widgetDataService.toggleFavorite(id);
  }

  addWidget() {
    this.widgetDataService.generateWidgets(1);
  }
}
