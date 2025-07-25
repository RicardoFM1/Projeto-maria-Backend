import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Despesas } from "../entities/despesas.entitie"
import { AppError } from "../errors"
import { Doces } from "../entities/doces.entitie"


export const deleteDoceService = async(doceId:string):Promise<void> => {
 const doceRepository:Repository<Doces> = AppDataSource.getRepository(Doces)
 const doceFind = await doceRepository.findOne(
    {
        where: {
            id: parseInt(doceId)
        },
    }
 )
 if(!doceFind){
    throw new AppError("Doce não encontrado!")
 }
 await doceRepository.remove(doceFind)
}