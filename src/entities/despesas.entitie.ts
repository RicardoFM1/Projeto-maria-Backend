import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("despesas")
export class Despesas {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    name: string

    @Column()
    valor: number

}