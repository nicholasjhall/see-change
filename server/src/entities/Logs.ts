import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Logs extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: string;

    @Column()
    exercise?: number;

    @Column()
    calories?: number;

    @Column()
    weight?: number;

    @Column()
    notes?: string;

    @ManyToOne(() => Users, user => user.logs)
    user!: Users;

}