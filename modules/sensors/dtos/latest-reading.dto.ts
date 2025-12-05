export interface LatestReadingDTO {
  sensorId: number; 
  name: string;
  type: string;
  unit: str | null;
  latestValue: number | null;
  timestamp: string | null; 
}
