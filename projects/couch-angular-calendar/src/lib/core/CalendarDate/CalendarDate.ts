import * as moment from "moment";
import CalendarItem from "../CalenderItem";
import TimeRange from "../TimeRange";
import { ITimeRange } from "../TimeRange/ITimeRange";
import { DayOfWeek } from "../enums/DayOfWeek";
import { ICalendarDate } from "./ICalendarDate";

export class CalendarDate implements ICalendarDate {
  public dayOfMonth: number;
  public dayOfWeek: DayOfWeek;
  public events: CalendarItem[];
  public hasAvailibility: boolean;
  public timeRestrictions: TimeRange[];
  public oporatingHours: TimeRange;

  constructor(cd: ICalendarDate) {
    this.dayOfMonth = cd.dayOfMonth;
    this.dayOfWeek = cd.dayOfWeek;
    this.events = cd.events;
    this.hasAvailibility = cd.hasAvailibility;
    this.timeRestrictions = cd.timeRestrictions.map(tr => new TimeRange(tr));
    this.oporatingHours = new TimeRange(cd.oporatingHours);
  }

  public getAvailibility() : Array<TimeRange>{
    const retArr: Array<TimeRange> = [];
    let currentStart: moment.Moment = this.oporatingHours.startTime;

    //case for no events
    if(this.events.length == 0) {
      //TODO: if no restrictions ret arr push oporating hours
      if(this.timeRestrictions.length == 0) {

      }

      //TODO: else add time blocks for times around restrictions within oporatng hours.
      return retArr;
    }

    //for every event, add open time ranges
    for (let event of this.events) {
      //skip if current event starts at end of previous event
      if(retArr.length > 0 && retArr[retArr.length].endTime == event.startTime) {
        continue;
      }

      let timeBlock: ITimeRange = {startTime: currentStart, endTime: event.startTime};

      currentStart = event.endTime;

      //if time restrinctions...
      if(this.timeRestrictions.length > 0) {
        //check for conflict
        for (let tr of this.timeRestrictions) {
          if(tr.startTime >= timeBlock.startTime && tr.endTime <= timeBlock.endTime) {
            timeBlock.endTime = tr.startTime;
            currentStart = tr.endTime;
          }
        }
      }

      retArr.push(new TimeRange(timeBlock));

      //if last event in array and event ends before end of oporating hours...
      if(event == this.events[this.events.length] && currentStart < this.oporatingHours.endTime) {
        //add final block to ret array
        let finalBlock: ITimeRange = {startTime: currentStart, endTime: this.oporatingHours.endTime};
        retArr.push(new TimeRange(finalBlock));
      }
    }

    return retArr;
  }
}
