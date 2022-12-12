import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {HallType} from "./HallTypes";
import {Teacher} from "./Teacher";
import {Class} from "./Class";
import {Building} from "./Building";

@Entity("halls")
export class Hall extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => HallType, hp => hp.hall, {nullable: false})
    hallType: HallType

    @Column({
        nullable: false
    })
    hallNumber: number;

    @Column({
        nullable: false,
        default: true
    })
    isFree: boolean

    @ManyToOne(() => Teacher, t => t.hall, {nullable: true})
    teacher: Teacher | null

    @ManyToOne(() => Class, c => c.hall, {nullable: true})
    class: Class | null

    @ManyToOne(() => Building, b => b.hall, {nullable: false})
    building: Building
}