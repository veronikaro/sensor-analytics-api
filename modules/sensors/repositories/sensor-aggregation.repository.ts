import { knex } from "../../src/db/knex";
import { ISensorAggregationRepository } from ".sensor-aggregation.repository.interface";
import {
  LatestReadingDTO,
  TimeSeriesPointDTO,
  AggregatedPointDTO
} from "../dtos";


export class SensorAggregationRepository implements ISensorAggregationRepository {
  // latest value
  async getLatestReading(sensorId: number): Promise<LatestReadingDTO | null> {
    
  }

  // raw timeseries 
  async getTimeSeries(
    sensorId: number,
    from: string,
    to: string,
    order?: "asc" | "desc"
  ): Promise<TimeseriesPointDTO[]> {

  }
  
  // aggregates
  async getAggregated(
    sensorId: number,
    resolution: string, // "1h" | "1d" etc.
    from: string,
    to: string
  ): Promise<AggregatedPointDTO[]> {

  }
}
