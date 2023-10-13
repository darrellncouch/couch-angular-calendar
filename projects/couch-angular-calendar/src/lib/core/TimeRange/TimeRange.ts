import { Moment, Duration } from "moment";
import { ITimeRange } from "./ITimeRange";
import * as moment from "moment";

export class TimeRange implements ITimeRange {
  public startTime: Moment;
  public endTime: Moment;
  public druation: Duration;

  constructor(tr: ITimeRange) {
    this.startTime = tr.startTime;
    this.endTime = tr.endTime;
    this.druation = moment.duration(this.endTime.diff(this.startTime));
  }
}
