import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {databaseConnection} from "./Database/DatabaseConnection";

async function bootstrap() {
  await databaseConnection.initialize()
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
