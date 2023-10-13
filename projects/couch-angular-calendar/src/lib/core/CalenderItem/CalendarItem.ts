import { Moment } from "moment";
import { ICalendarItem } from "./ICalendarItem";
import * as moment from "moment";

export class CalendarItem implements ICalendarItem {
  public title: string;
  public location: string;
  public startTime: Moment;
  public endTime: Moment;
  public duration: moment.Duration;

  constructor(calendarItem : ICalendarItem) {
    this.title = calendarItem.title || "";
    this.location = calendarItem.location || "";
    this.startTime = calendarItem.startTime || moment.now();
    this.endTime = calendarItem.endTime || moment(calendarItem.startTime).add(30, "m");
    this.duration = moment.duration(this.endTime.diff(this.startTime));
  }

}
