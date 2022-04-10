import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class ForekeyCategorias1649011042634 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('produtos', new TableColumn({
                name:"categoria_id",
                type:'uuid',
                isNullable: true
        },
        ))
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('produtos','categoria_id');
    }

}
