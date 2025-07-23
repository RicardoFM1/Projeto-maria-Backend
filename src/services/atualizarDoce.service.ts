import { Repository } from "typeorm";
import { iCriarDoce, iReturnDoce } from "../schemas/doces.schemas";
import { Doces } from "../entities/doces.entitie";
import { AppDataSource } from "../data-source";


export const AtualizarDoceService = async(DoceData:iCriarDoce, despesaId:string):Promise<iReturnDoce> => {
    const doceRepository:Repository<Doces> = AppDataSource.getRepository(Doces)
    const doceFind:Doces|null = await doceRepository.findOne(
        {
            where:{
                id: parseInt(despesaId)
            }
        }
    )
    
}