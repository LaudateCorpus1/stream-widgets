export class WidgetData {
  title: String;
  channelsImages: WidgetDataImage[];
  creatorName: String;
  subscribersImages: String[];
  subscribersCount: Number;
}

export class WidgetDataImage {
  url: String;
  rounded: Boolean;
}
