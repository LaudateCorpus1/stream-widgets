import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WidgetData } from '../../models/widget-data';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() data: WidgetData;
  @Input() inFavorites: Boolean;
  @Output() toggleFavorite = new EventEmitter<String>();

  constructor() {
  }

  ngOnInit() {
  }

}
