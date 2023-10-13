import { Moment } from "moment";

export interface ICalendarItem {
  title: string;
  location: string;
  startTime: Moment;
  endTime: Moment;
}
