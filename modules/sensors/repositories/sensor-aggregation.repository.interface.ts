import {
  LatestReadingDTO,
  TimeSeriesPointDTO,
  AggregatedPointDTO
} from "../dtos";

export interface ISensorAggregationRepository {
  // latest value
  getLatestReading(sensorId: number): Promise<LatestReadingDTO | null>;

  // raw timeseries 
  getTimeSeries(
    sensorId: number,
    from: string,
    to: string,
    order?: "asc" | "desc"
  ): Promise<TimeseriesPointDTO[]>;
  
  // aggregates
  getAggregated(
    sensorId: number,
    resolution: string, // "1h" | "1d" etc.
    from: string,
    to: string
  ): Promise<AggregatedPointDTO[]>;
}
