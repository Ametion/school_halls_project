import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Hall} from "./Hall";

@Entity("buildings")
export class Building extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    buildingName: string

    @OneToMany(() => Hall, h => h.building)
    hall: Hall
}