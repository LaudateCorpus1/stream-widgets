export class WidgetData {
  id: String;
  title: String;
  channelsImages: WidgetDataImage[];
  creatorName: String;
  subscribersImages: String[];
  subscribersCount: Number;
  inFavorites: Boolean;
}

export class WidgetDataImage {
  url: String;
  rounded: Boolean;
}
