"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    //autoLoadEntities: true,
    synchronize: process.env.APP_ENV == 'dev',
    entities: ["".concat(__dirname, "/../src/**/entities/*.entity{.ts,.js}")],
    migrations: ["".concat(__dirname, "/migrations/*{.ts,.js}")],
    logging: process.env.APP_ENV == 'dev',
    migrationsTableName: 'migrations',
    migrationsRun: false,
});
