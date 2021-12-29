"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPEORM_ADDITIONAL = exports.TYPEORM_MAIN = exports.BCRYPT_SALT = exports.JWT_REFRESH_SECRET = exports.JWT_SECRET = exports.GRAPHQL_DEPTH_LIMIT = exports.RATE_LIMIT_MAX = exports.END_POINT = exports.PORT = exports.DOMAIN = exports.PRIMARY_COLOR = exports.AUTHOR = exports.CLIENT_HOST = exports.NODE_ENV = void 0;
const dotenv = require("dotenv");
dotenv.config();
const NODE_ENV = process.env.NODE_ENV || 'development';
exports.NODE_ENV = NODE_ENV;
const CLIENT_HOST = process.env.CLIENT_HOST || 'http://localhost:3000';
exports.CLIENT_HOST = CLIENT_HOST;
const AUTHOR = process.env.AUTHOR || 'IATU-MIND';
exports.AUTHOR = AUTHOR;
const PRIMARY_COLOR = process.env.PRIMARY_COLOR || '#87e8de';
exports.PRIMARY_COLOR = PRIMARY_COLOR;
const DOMAIN = process.env.DOMAIN || 'localhost';
exports.DOMAIN = DOMAIN;
const PORT = +process.env.PORT || 8080;
exports.PORT = PORT;
const END_POINT = process.env.END_POINT || 'graphql';
exports.END_POINT = END_POINT;
const RATE_LIMIT_MAX = +process.env.RATE_LIMIT_MAX || 10000;
exports.RATE_LIMIT_MAX = RATE_LIMIT_MAX;
const GRAPHQL_DEPTH_LIMIT = +process.env.GRAPHQL_DEPTH_LIMIT || 3;
exports.GRAPHQL_DEPTH_LIMIT = GRAPHQL_DEPTH_LIMIT;
const enviroment = {
    main: {
        type: process.env.DATABASE_TYPE,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE,
    },
    iatu: {
        type: process.env.DATABASE_TYPE_ADD,
        host: process.env.DATABASE_HOST_ADD,
        port: process.env.DATABASE_PORT_ADD,
        username: process.env.DATABASE_USER_ADD,
        password: process.env.DATABASE_PASSWORD_ADD,
        database: process.env.DATABASE_DATABASE_ADD,
    },
};
const TYPEORM_MAIN = enviroment[process.env.DATABASE_MAIN];
exports.TYPEORM_MAIN = TYPEORM_MAIN;
const TYPEORM_ADDITIONAL = enviroment[process.env.DATABASE_ADD];
exports.TYPEORM_ADDITIONAL = TYPEORM_ADDITIONAL;
const JWT_SECRET = process.env.JWT_SECRET || 'SECRET';
exports.JWT_SECRET = JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refresh-token-key';
exports.JWT_REFRESH_SECRET = JWT_REFRESH_SECRET;
const BCRYPT_SALT = +process.env.BCRYPT_SALT || 10;
exports.BCRYPT_SALT = BCRYPT_SALT;
//# sourceMappingURL=index.js.map