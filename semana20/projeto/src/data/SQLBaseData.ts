import knex from 'knex'
import dotenv from 'dotenv';

dotenv.config();

export abstract class SQLBaseData {
    private static connection: knex | null;

    protected getConnection(): knex {
        if (!SQLBaseData.connection) {
            SQLBaseData.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT || "3306"),
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_SCHEMA,
                    multipleStatements: true
                }
            });
        };

        return SQLBaseData.connection;
    };
};