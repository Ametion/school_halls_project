import { Module } from '@nestjs/common';
import {HallsModule} from "./Halls/halls.module";
import {HallsTypesModule} from "./HallsTypes/hallsTypes.module";
import {TeacherModule} from "./Teachers/teacher.module";
import {ClassesModule} from "./Classes/classes.module";
import {BuildingsModule} from "./Buildings/buildings.module";

@Module({
  imports: [HallsModule, HallsTypesModule, TeacherModule, ClassesModule, BuildingsModule]
})
export class AppModule {}