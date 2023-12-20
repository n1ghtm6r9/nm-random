import { Global, Module } from '@nestjs/common';
import * as Services from './services';
import { randomServiceKey } from './constants';
import { IRandomService } from './interfaces';

@Global()
@Module({
  providers: [
    ...Object.values(Services),
    {
      provide: randomServiceKey,
      useFactory: (
        getRandomIntService: Services.GetRandomIntService,
        getRandomFloatService: Services.GetRandomFloatService,
        getRandomChanceService: Services.GetRandomChanceService,
      ): IRandomService => ({
        int: getRandomIntService.call.bind(getRandomIntService),
        float: getRandomFloatService.call.bind(getRandomFloatService),
        chance: getRandomChanceService.call.bind(getRandomChanceService),
      }),
      inject: [Services.GetRandomIntService, Services.GetRandomFloatService, Services.GetRandomChanceService],
    },
  ],
  exports: [randomServiceKey],
})
export class RandomModule {}
