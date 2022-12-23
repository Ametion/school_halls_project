import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Hall} from "./Hall";

@Entity("buildings")
export class Building extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    buildingName: string

    @OneToMany(() => Hall, h => h.building)
    hall: Hall
}