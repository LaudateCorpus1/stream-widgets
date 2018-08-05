import { TestBed, inject } from '@angular/core/testing';

import { WidgetDataService } from './widget-data.service';

describe('WidgetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetDataService]
    });
  });

  it('should be created', inject([WidgetDataService], (service: WidgetDataService) => {
    expect(service).toBeTruthy();
  }));
});
