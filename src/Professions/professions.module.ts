import {Module} from "@nestjs/common";
import {ProfessionsController} from "./professions.controller";
import {ProfessionsService} from "./professions.service";

@Module({
    providers: [ProfessionsService],
    controllers: [ProfessionsController]
})
export class ProfessionsModule { }