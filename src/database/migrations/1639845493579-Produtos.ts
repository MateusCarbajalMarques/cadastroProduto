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
                    
                },
                {
                    name: "descricao",
                    type: "varchar",

                },
                {
                    name: "codigo_barra",
                    type: "numeric",
                    isUnique: true
                },
                {
                    name: "preco",
                    type: "numeric",

                },
            
                {
                    name: "created_at",
                    type:"timestamp",
                    default:"now()"
                }
            ],

            foreignKeys:[
                {
                    name:"fk_produtos_categoria",
                    columnNames:["categoria_id"],
                    referencedTableName:"categorias",
                    referencedColumnNames: ["id"]
                }
            ]
       

        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produtos")
    }

}
