import { TestBed } from '@angular/core/testing';

import { CouchAngularCalendarService } from './couch-angular-calendar.service';

describe('CouchAngularCalendarService', () => {
  let service: CouchAngularCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouchAngularCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
