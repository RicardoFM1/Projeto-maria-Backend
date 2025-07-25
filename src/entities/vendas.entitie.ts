import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Doces } from "./doces.entitie";

@Entity("vendas")
export class Vendas {
    @PrimaryGeneratedColumn("increment")
    id: number

    @ManyToOne(()=>Doces, {nullable: true, onDelete: "SET NULL"})
    @JoinColumn({name:"produto"})
    produto:Doces | null

    @Column()
    quantidade: number

    @Column()
    total_vendido: number

    @Column()
    total_lucro: number

    @CreateDateColumn({type:"date"})
    hora_da_venda: string
    
}