import { getRepository } from "typeorm";
import { Hints } from '../entity/Hints';
import { Request, Response } from "express";
export const getHints = async(request: Request, response: Response) => {
    const hints = await getRepository(Hints).find()
    return response.json(hints);
};
export const saveHint = async(request: Request, response: Response) => {
    const hint = await getRepository(Hints).save(request.body)
    return response.json(hint);
};
export const getHint = async(request: Request, response: Response) => {
    const {id} = request.params
    const hint = await getRepository(Hints).findOneById(id)
    return response.json(hint);
};
export const updateHint = async(request: Request, response: Response) => {
    const {id} = request.params
    const hint = await getRepository(Hints).update(id, request.body)
    if (hint.affected == 1){
        const hintUpdated = await getRepository(Hints).findOneById(id)
        return response.json(hintUpdated);
    }
    else{
        return response.status(404).json( {message: `Dica não encontrada!`} )
    }
};
export const deleteHint = async(request: Request, response: Response) => {
    const {id} = request.params
    const hint = await getRepository(Hints).delete(id)
    if (hint.affected == 1){
        return response.status(200).json( {message: "Dica excluída com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Dica não encontrada!'} )
    }
};
export const finishedHint = async(request: Request, response: Response) => {
    const {id} = request.params
    const hint = await getRepository(Hints).update(id, {
        finished: true,
    })
    if (hint.affected == 1){
        const hintFinished = await getRepository(Hints).findOneById(id)
        return response.json(hintFinished);
    }
    else{
        return response.status(404).json( {message: 'Dica não encontrada!'} )
    }
};