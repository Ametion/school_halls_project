import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Hall} from "./Hall";

@Entity("hallTypes")
export class HallType extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    type: string;

    @OneToMany(() => Hall, h => h.hallType)
    hall: Hall
}