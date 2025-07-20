import { Repository } from "typeorm"
import { Doces } from "../entities/doces.entitie"
import { AppDataSource } from "../data-source"
import { number } from "zod"
import { iCriarDoce, iReturnDoce, ReturnDoceSchema } from "../schemas/doces.schemas"
import { AppError } from "../errors"


export const CreateDoceService = async(doceData:iCriarDoce):Promise<iReturnDoce> => {
    const doceRepository: Repository<Doces> = AppDataSource.getRepository(Doces)
        const findDoce: Doces | null = await doceRepository.findOne({
            where:{
                name:doceData.name
            },
            
        })
     if(findDoce){
            throw new AppError("Doce já cadastrado",409)
        }
    const createDoce = doceRepository.create(doceData)
    await doceRepository.save(createDoce)
    const doce = ReturnDoceSchema.parse(createDoce) // vai ir no schema de returndoces, validar se ta tudo certo com o parse.
    return doce
}