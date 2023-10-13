import { NgModule } from '@angular/core';
import { CouchAngularCalendarComponent } from './couch-angular-calendar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';



@NgModule({
  declarations: [
    CouchAngularCalendarComponent,
    CalendarComponent,
    CalendarDayComponent
  ],
  imports: [
  ],
  exports: [
    CouchAngularCalendarComponent
  ]
})
export class CouchAngularCalendarModule { }
