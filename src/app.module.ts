import { Module } from '@nestjs/common';
import {HallsModule} from "./Halls/halls.module";
import {HallsTypesModule} from "./HallsTypes/hallsTypes.module";

@Module({
  imports: [HallsModule, HallsTypesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}