import { Repository } from "typeorm"
import { Doces } from "../entities/doces.entitie"
import app from "../app"
import { AppDataSource } from "../data-source"
import { iReturnAllDoces, iReturnDoce, ReturnAllDoces, ReturnDoce } from "../schemas/doces.schemas"


export const getAllDocesService = async():Promise<iReturnAllDoces> => {
    const doceRepository:Repository<Doces> = AppDataSource.getRepository(Doces)
    const findDoces = await doceRepository.find()
    const doces = ReturnAllDoces.parse(findDoces)
    return doces
}
