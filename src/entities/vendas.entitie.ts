import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {getRounds,hashSync} from "bcryptjs"
import { Doces } from "./doces.entitie";

@Entity("vendas")
export class Vendas {
    @PrimaryGeneratedColumn("increment")
    id: number

    @ManyToOne(()=>Doces)
    produto:Doces

    @Column()
    quantidade: number

    @Column()
    total_vendido: number

    @Column()
    total_lucro: number

    @CreateDateColumn({type:"date"})
    hora_da_venda: string
    
}