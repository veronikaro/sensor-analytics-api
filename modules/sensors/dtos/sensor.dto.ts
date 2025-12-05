export interface SensorDTO {
  id: number;
  deviceId: string | null;
  name: string;
  type: string; // e.g. "temperature", "humidity", etc
  unit: string | null;
}

export interface SensorListResponseDTO {
  sensors: SensorDTO[];
}
