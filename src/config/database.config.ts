import { registerAs } from "@nestjs/config";

export default registerAs('database', () => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    //autoLoadEntities: true,
    synchronize: process.env.APP_ENV == 'dev',
    entities: [`${__dirname}/../**/entities/*.entity{.ts,.js`],
    migrations: [`${__dirname}/../../db/migrations/*{.ts,.js}`],
    logging: process.env.APP_ENV == 'dev',
    migrationsTableName: 'migrations',
    migrationsRun: false,
}))