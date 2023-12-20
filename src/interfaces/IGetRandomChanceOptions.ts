import { IChance } from './IChance';

export interface IGetRandomChanceOptions<T extends IChance = any> {
  seed?: string;
  chances: T[];
}
