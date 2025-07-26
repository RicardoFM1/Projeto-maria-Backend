import { Repository } from "typeorm";
import { iReturnDoce, ReturnDoceSchema } from "../schemas/doces.schemas";
import { Doces } from "../entities/doces.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";




export const GetDocesByIdService = async(doceId:string):Promise<iReturnDoce> => {
    const doceRepository:Repository<Doces> = AppDataSource.getRepository(Doces)

    const doceFind:Doces | null = await doceRepository.findOne(
        {
            where:{
                id: parseInt(doceId)
            }
        }
    )
    if(!doceFind){
        throw new AppError("Doce não encontrado!")
    }
    const doce = ReturnDoceSchema.parse(doceFind)
    return doce
}