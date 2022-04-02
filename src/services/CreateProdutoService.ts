import { getRepository } from "typeorm";

import { Produtos } from "../entities/Produtos";

import path from 'path';
import uploadConfig from '../config/upload';
import fs from 'fs';

type ProdutoRequest = {
    image: string,
    nome: string;
    descricao: string;
    codigo_barra: number;
    preco: number;
    categoria: string;
}

export class CreateProdutoService {
    async execute({ image, nome, descricao, codigo_barra, preco, categoria }: ProdutoRequest): Promise<Error | Produtos> {

        const repo = getRepository(Produtos);

        const produto = repo.create({
            image,
            nome,
            descricao,
            codigo_barra,
            preco,
            categoria
        });

        await repo.save(produto);

        return produto;

    }
}