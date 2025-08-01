import { Repository } from "typeorm"
import { Doces } from "../entities/doces.entitie"
import { AppDataSource } from "../data-source"
import { iReturnAllDoces,  ReturnAllDocesSchema } from "../schemas/doces.schemas"
import { AppError } from "../errors"


export const getAllDocesService = async():Promise<iReturnAllDoces> => {
    const doceRepository:Repository<Doces> = AppDataSource.getRepository(Doces)
    const findDoces = await doceRepository.find()

     if(findDoces.length <= 0){
            throw new AppError("Nenhum doce cadastrado ainda")
        }
    const doces = ReturnAllDocesSchema.parse(findDoces)
    return doces.map((doce) => ({
        ...doce,
        preco_de_custo: doce.preco_de_custo / 100,
        preco_de_venda: doce.preco_de_venda / 100,
    }))
}
