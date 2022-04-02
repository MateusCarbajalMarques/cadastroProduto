import { Request, Response } from "express";
import { CreateProdutoService } from "../services/CreateProdutoService";
import path from 'path';
import uploadConfig from '../config/upload';
import fs from 'fs';

export class CreateProdutoController {
    async handle(request: Request, response: Response) {
        const 
        { 
            image,
            nome,
            descricao,
            codigo_barra,
            preco,
            categoria
             } = request.body

            const servive = new CreateProdutoService();

            const result = await servive.execute({
                image,
                nome,
                descricao,
                codigo_barra,
                preco,
                categoria,
            })
            if(result instanceof Error){
                return response.status(400).json(result.message)
            }
        return response.json(result);
    }
}