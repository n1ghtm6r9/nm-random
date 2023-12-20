import math from 'big.js';
import { Injectable } from '@nestjs/common';
import { IGetRandomChanceOptions, IGetRandomChanceResult } from '../interfaces';
import { GetRandomFloatService } from './GetRandomFloatService';

@Injectable()
export class GetRandomChanceService {
  constructor(protected readonly getRandomFloatService: GetRandomFloatService) {}

  public call({ chances, seed }: IGetRandomChanceOptions): IGetRandomChanceResult {
    if (!chances.length) {
      throw new Error('Array of chances is empty!');
    }

    const chancesSum = chances.reduce((res, v) => res.add(v.chance), math(0)).toNumber();

    const randomResult = this.getRandomFloatService.call({
      min: 0,
      max: chancesSum,
      precision: 2,
      seed,
    });

    let sum = 0;
    const index = chances.findIndex(v => {
      sum = math(sum).add(v.chance).toNumber();
      return randomResult <= sum;
    });

    return {
      index,
      item: chances[index],
    };
  }
}
