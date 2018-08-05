export class WidgetData {
  id: String;
  title: String;
  channelsImages: WidgetDataImage[];
  channelsCount: number;
  creatorName: String;
  subscribersImages: String[];
  subscribersCount: number;
  inFavorites: Boolean;
}

export class WidgetDataImage {
  url: String;
  rounded: Boolean;
}
