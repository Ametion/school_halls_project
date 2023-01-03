import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Hall} from "./Hall";
import {Class} from "./Class";
import {HallsHistory} from "./HallsHistory";

@Entity("teachers")
export class Teacher extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    firstName: string;

    @Column({
        nullable: false
    })
    secondName: string;

    @OneToMany(() => Hall, h => h.teacher)
    hall: Hall

    @OneToMany(() => Class, c => c.classTeacher)
    class: Class;

    @OneToMany(() => HallsHistory, h => h.teacher)
    hallHistory: HallsHistory;
}