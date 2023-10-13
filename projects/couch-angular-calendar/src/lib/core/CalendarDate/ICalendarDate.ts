import { DayOfWeek } from "../enums/DayOfWeek";
import CalendarItem from "../CalenderItem";
import { ITimeRange } from "../TimeRange/ITimeRange";
import TimeRange from "../TimeRange";

export interface ICalendarDate {
  dayOfMonth: number;
  dayOfWeek: DayOfWeek;
  events: Array<CalendarItem>;
  hasAvailibility: boolean;
  timeRestrictions: Array<ITimeRange>
  oporatingHours: ITimeRange;
}
