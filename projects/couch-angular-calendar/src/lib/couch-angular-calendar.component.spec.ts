import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchAngularCalendarComponent } from './couch-angular-calendar.component';

describe('CouchAngularCalendarComponent', () => {
  let component: CouchAngularCalendarComponent;
  let fixture: ComponentFixture<CouchAngularCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouchAngularCalendarComponent]
    });
    fixture = TestBed.createComponent(CouchAngularCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
