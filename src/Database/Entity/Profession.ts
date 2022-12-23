import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Class} from "./Class";

@Entity("professions")
export class Profession extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false,
        unique: true
    })
    profession: string

    @OneToMany(() => Class, c => c.profession)
    class: Class
}