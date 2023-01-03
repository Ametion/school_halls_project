import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Hall} from "./Hall";
import {Teacher} from "./Teacher";

@Entity("hallsHistory")
export class HallsHistory extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    reservedDate: string;

    @Column({
        nullable: true
    })
    vacateDate: string;

    @ManyToOne(() => Hall, h => h.hallHistory)
    hall: Hall;

    @ManyToOne(() => Teacher, t => t.hallHistory)
    teacher: Teacher;
}