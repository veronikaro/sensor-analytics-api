import {SensorDTO} from "../dtos";

export interface ISensorRepository {
  getAllSensors(): Promise<SensorDTO[]>;
  getSensorById(sensorId: number): Promise<SensorDTO | null>;
}
