import { Repository } from "typeorm"
import { Doces } from "../entities/doces.entitie"
import { AppDataSource } from "../data-source"
import { number } from "zod"
import { iCriarDoce, iReturnDoce, ReturnDoce } from "../schemas/doces.schemas"


export const CriarDoceService = async(doceData:iCriarDoce):Promise<iReturnDoce> => {
    const doceRepository: Repository<Doces> = AppDataSource.getRepository(Doces)
    const createDoce = doceRepository.create(doceData)
    await doceRepository.save(createDoce)
    const doce = ReturnDoce.parse(createDoce) // vai ir no schema de returndoces, validar se ta tudo certo com o parse.
    return doce
}