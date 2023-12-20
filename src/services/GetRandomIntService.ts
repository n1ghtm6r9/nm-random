import * as crypto from 'crypto';
import * as seedrandom from 'seedrandom';
import { Injectable } from '@nestjs/common';
import { IGetRandomIntOptions } from '../interfaces';

@Injectable()
export class GetRandomIntService {
  public call = ({ min, max, seed }: IGetRandomIntOptions) =>
    seed ? Math.floor(seedrandom(seed)() * (max - min + 1)) + min : crypto.randomInt(min, max + 1);
}
