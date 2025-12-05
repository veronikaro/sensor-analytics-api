import { knex } from "../../src/db/knex";
import { ISensorRepository } from "./sensor.repository.interface";
import { BaseRepository } from "../../src/core/base.repository";
import { SensorDTO } from "../dtos";


export class SensorRepository extends BaseRepository<SensorDTO> implements ISensorRepository {
  
  constructor() {
    super("sensor");
  }
  
  async getAllSensors(): Promise<SensorDTO[]> {
    return this.findAll(); // inherited
  }

  async getSensorById(sensorId: number): Promise<SensorDTO | null> {
    return this.findById(sensorId); // inherited
  }
}
