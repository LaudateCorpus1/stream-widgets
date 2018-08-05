import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as data from './widget-data.json';
import { WidgetData } from '../models/widget-data';
import { generateId, rand } from '../utils/rand';

@Injectable({
  providedIn: 'root'
})
export class WidgetDataService {
  private titles: String[] = data['titles'];
  private channelsImages: String[] = data['channels-images'];
  private subscribersImages: String[] = data['subscribers-images'];
  private creatorsNames: String[] = data['creators'];

  private _widgetsSubject = new BehaviorSubject<WidgetData[]>([]);
  public widgets = this._widgetsSubject.asObservable();

  constructor() {
  }

  public generateWidgets(count: Number): void {
    const widgets = this._widgetsSubject.getValue();
    const newWidgets: WidgetData[] = [];

    for (let i = 0; i < count; i++) {
      const title = this.titles[rand(0, this.titles.length)];
      const channelsImages = new Array(3).fill(null).map(
        () => ({
          url: this.channelsImages[rand(0, this.channelsImages.length)],
          rounded: Boolean(rand(0, 2)),
        })
      );
      const subscribersImages = new Array(rand(3, 6)).fill(null).map(
        () => this.subscribersImages[rand(0, this.subscribersImages.length)]
      );
      const creatorName = this.creatorsNames[rand(0, this.creatorsNames.length)];

      const widget = {
        title,
        channelsImages,
        subscribersImages,
        creatorName,
        subscribersCount: rand(5, 10000),
        inFavorites: Boolean(rand(0, 2)),
        channelsCount: rand(5, 100),
        id: generateId(),
      };
      newWidgets.push(widget);
    }
    this._widgetsSubject.next([...widgets, ...newWidgets]);
  }

  toggleFavorite(id: String) {
    const widgets = [...this._widgetsSubject.getValue()];
    const index = widgets.findIndex(w => w.id === id);
    const widget = widgets[index];
    widgets[index] = { ...widget, inFavorites: !widget.inFavorites };
    this._widgetsSubject.next(widgets);
  }
}
