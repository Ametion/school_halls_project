import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Teacher} from "./Teacher";
import {Profession} from "./Profession";
import {Hall} from "./Hall";

@Entity("classes")
export class Class extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    className: string;

    @Column({
        nullable: false
    })
    studentsAmount: number;

    @ManyToOne(() => Profession, p => p.profession, {nullable: false})
    profession: Profession

    @ManyToOne(() => Teacher, t => t.class, {nullable: false})
    classTeacher: Teacher

    @OneToMany(() => Hall, h => h.class)
    hall: Hall
}