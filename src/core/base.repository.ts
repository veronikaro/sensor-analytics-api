import { knex } from "../db/knex";

export abstract class BaseRepository<T> {
  constructor(protected readonly table: string) {}

  async findById(id: number): Promise<T | null> {
    const row = await knex<T>(this.table).where({ id }).first();
    return row ?? null;
  }

  async findAll(): Promise<T[]> {
    return knex<T>(this.table).select("*");
  }
}
