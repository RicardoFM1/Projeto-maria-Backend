import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("doces")
export class Doces {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({unique: true})
    name: string 
    
    @Column()
    preco_de_custo: number

    @Column()
    preco_de_venda: number



    

}