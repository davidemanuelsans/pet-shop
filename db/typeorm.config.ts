const typeorm = require("typeorm");
const { DataSource } = typeorm;
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });


const datasource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    //autoLoadEntities: true,
    synchronize: process.env.APP_ENV == 'dev',
    entities: [`${__dirname}/../src/**/entities/*.entity{.ts,.js}`],
    migrations: [`${__dirname}/migrations/*{.ts,.js}`],
    logging: process.env.APP_ENV == 'dev',
    migrationsTableName: 'migrations',
    migrationsRun: false,
});

module.exports = {datasource};