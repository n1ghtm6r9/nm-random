import { IChance } from './IChance';

export interface IGetRandomChanceResult<T extends IChance = any> {
  index: number;
  item: T;
}
