import { Module } from '@nestjs/common';
import {HallsModule} from "./Halls/halls.module";
import {HallsTypesModule} from "./HallsTypes/hallsTypes.module";
import {TeacherModule} from "./Teachers/teacher.module";
import {ClassesModule} from "./Classes/classes.module";

@Module({
  imports: [HallsModule, HallsTypesModule, TeacherModule, ClassesModule]
})
export class AppModule {}