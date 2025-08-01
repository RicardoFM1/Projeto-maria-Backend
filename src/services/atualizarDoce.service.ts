import { Repository } from "typeorm";
import { iCriarDoce, iReturnDoce, ReturnDoceSchema } from "../schemas/doces.schemas";
import { Doces } from "../entities/doces.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";


export const AtualizarDoceService = async(doceData:iCriarDoce, doceId:string ):Promise<iReturnDoce> => {
    const doceRepository:Repository<Doces> = AppDataSource.getRepository(Doces)
    const doceFind:Doces|null = await doceRepository.findOne(
        {
            where:{
                id: parseInt(doceId)
            }
        }
    )
    if(!doceFind){
        throw new AppError("Não foi possível encontrar nenhum doce")
    }
    const docePatch = doceRepository.merge(doceFind, doceData)
    await doceRepository.save(docePatch)
    const doce = ReturnDoceSchema.parse(docePatch)
    return doce 
}