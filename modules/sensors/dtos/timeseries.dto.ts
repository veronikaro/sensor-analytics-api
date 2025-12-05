
export interface TimeseriesPointDTO {
  timestamp: string; 
  value: number | null;
}

export interface TimeseriesDTO {
  sensorId: number;
  name: string;
  type: string;
  unit: string | null;
  data: TimeseriesPointDTO[];
}
