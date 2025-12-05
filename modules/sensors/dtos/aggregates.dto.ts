export interface AggregatedPointDTO {
  timestamp: string; // aggregated bucket timestamp
  value: number | null;
}

export interface SensorAggregateSeriesDTO {
  sensorId: number;
  sensorName: string;
  type: string;
  unit: string | null;

  from: string;
  to: string;
  resolution: string | null;

  data: AggregatedPointDTO[];
}
