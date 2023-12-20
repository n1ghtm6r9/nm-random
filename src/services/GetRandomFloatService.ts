import math from 'big.js';
import { Injectable } from '@nestjs/common';
import { IGetRandomFloatOptions } from '../interfaces';
import { GetRandomIntService } from './GetRandomIntService';

@Injectable()
export class GetRandomFloatService {
  constructor(protected readonly getRandomIntService: GetRandomIntService) {}

  public call({ min, max, precision, seed }: IGetRandomFloatOptions) {
    const powPrecision = Math.pow(10, precision);

    const result = this.getRandomIntService.call({
      seed,
      min: math(min).mul(powPrecision).toNumber(),
      max: math(max).mul(powPrecision).toNumber(),
    });

    return math(result).div(powPrecision).toNumber();
  }
}
