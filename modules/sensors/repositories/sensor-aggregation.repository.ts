import { knex } from "../../src/db/knex";
import { ISensorAggregationRepository } from ".sensor-aggregation.repository.interface";
import {
  LatestReadingDTO,
  TimeSeriesPointDTO,
  AggregatedPointDTO
} from "../dtos";


export class SensorAggregationRepository implements ISensorAggregationRepository {
  protected table = "sensor_data";
  // latest value
  async getLatestReading(sensorId: number): Promise<LatestReadingDTO | null> {
   const row = await knex<LatestReadingDTO>(this.table)
        .where({ sensor_id: sensorId })
        .orderBy("ts", "desc")
        .first();
  return row ?? null;
  }

  // raw timeseries 
  async getTimeSeries(
    sensorId: number,
    from: string,
    to: string,
    order?: "asc" | "desc"
  ): Promise<TimeseriesPointDTO[]> {
    let query = knex<TimeSeriesPointDTO>(this.table)
    .where({ sensor_id: sensorId })
    .andWhere("ts", ">=", from)
    .andWhere("ts", "<=", to)
    .orderBy("ts", order);
    return query;
  }
  
  // aggregates average value over specified time intervals (hourly, daily etc)
  async getAggregated(
    sensorId: number,
    resolution: string, // "hour" | "day" etc.
    from: string,
    to: string
  ): Promise<AggregatedPointDTO[]> {
  // TODO: custom query
    //
    query = `
      SELECT 
        date_truncate({resolution}, ts) AS time_interval,
        AVG(value)::float AS value
      FROM :table
      WHERE sensor_id = :id
      AND ts >= :from
      AND ts <= :to
      GROUP BY 
        time_interval
      ORDER BY 
        time_interval;
      `
    const { rows } = await knex<AgregatedPointDTO[]>(this.table).raw(query, {table: this.table, id: sensorId, from, to});
  }
}
