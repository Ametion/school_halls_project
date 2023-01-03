import { Module } from '@nestjs/common';
import {HallsModule} from "./Halls/halls.module";
import {HallTypesModule} from "./HallsTypes/hallTypes.module";
import {TeacherModule} from "./Teachers/teacher.module";
import {ClassesModule} from "./Classes/classes.module";
import {BuildingsModule} from "./Buildings/buildings.module";
import {HallsHistoryModule} from "./HallsHistory/hallsHistory.module";

@Module({
  imports: [HallsModule, HallTypesModule, TeacherModule, ClassesModule, BuildingsModule, HallsHistoryModule]
})
export class AppModule {}