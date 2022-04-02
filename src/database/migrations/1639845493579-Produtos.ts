import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Produtos1639845493579 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name:"produtos",
            columns:[
                {
                    name: "id",
                    type:"uuid",
                    isPrimary: true
                },
                {
                    name:"image",
                    type: "varchar",
                },
                {
                    name:"nome",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "descricao",
                    type: "varchar",

                },
                {
                    name: "codigo_barra",
                    type: "numeric",

                },
                {
                    name: "preco",
                    type: "numeric",

                },
                {
                    name: "categoria",
                    type: "varchar",

                },
                {
                    name: "created_at",
                    type:"timestamp",
                    default:"now()"
                }
            ],

        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produtos")
    }

}
