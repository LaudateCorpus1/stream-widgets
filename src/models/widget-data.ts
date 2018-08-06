export class WidgetData {
  id: String;
  title: String;
  channelsImages: WidgetDataImage[];
  channelsCount: number;
  creatorName: String;
  subscribersImages: String[];
  subscribersCount: number;
}

export class WidgetDataImage {
  url: String;
  rounded: Boolean;
}
