import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {getRounds,hashSync} from "bcryptjs"

@Entity("doces")
export class Doces {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    name: string

    @Column()
    preco_de_custo: number

    @Column()
    preco_de_venda: number



    

}