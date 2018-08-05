import { Component, Input, OnInit } from '@angular/core';
import { WidgetData } from '../../models/widget-data';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() data: WidgetData;

  constructor() {
  }

  ngOnInit() {
  }

}
