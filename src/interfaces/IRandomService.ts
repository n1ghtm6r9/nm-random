import { IChance } from './IChance';
import { IGetRandomIntOptions } from './IGetRandomIntOptions';
import { IGetRandomFloatOptions } from './IGetRandomFloatOptions';
import { IGetRandomChanceOptions } from './IGetRandomChanceOptions';
import { IGetRandomChanceResult } from './IGetRandomChanceResult';

export interface IRandomService {
  int(options: IGetRandomIntOptions): number;
  float(options: IGetRandomFloatOptions): number;
  chance<T extends IChance>(options: IGetRandomChanceOptions<T>): IGetRandomChanceResult<T>;
}
