"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _config_1 = require("./config");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const lusca_1 = require("lusca");
const class_validator_1 = require("class-validator");
const chalk = require("chalk");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const _environments_1 = require("./environments");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, {
            bufferLogs: true,
        });
        (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
        app.useLogger(new _config_1.MyLogger());
        app.getHttpAdapter();
        app.use(compression());
        app.use(helmet());
        app.enableCors({
            origin: _environments_1.CLIENT_HOST,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
            credentials: true,
        });
        app.use((0, lusca_1.xframe)('SAMEORIGIN'));
        app.use((0, lusca_1.xssProtection)(true));
        app.use(bodyParser.json({ limit: '50mb' }));
        app.use(bodyParser.urlencoded({
            limit: '50mb',
            extended: true,
            parameterLimit: 50000,
        }));
        app.use(rateLimit({
            windowMs: 1000 * 60 * 60,
            max: _environments_1.RATE_LIMIT_MAX,
            message: '⚠️  Too many request created from this IP, please try again after an hour',
        }));
        app.useGlobalPipes(new common_1.ValidationPipe());
        app.enableShutdownHooks();
        await app.listen(_environments_1.PORT);
        if (module.hot) {
            module.hot.accept();
            module.hot.dispose(() => app.close());
        }
        _environments_1.NODE_ENV !== 'production'
            ? (common_1.Logger.log(`🤬  Application is running on: ${await app.getUrl()}`, 'NestJS', false),
                common_1.Logger.log(`🚀  Server ready at http://${_environments_1.DOMAIN}:${chalk
                    .hex(_environments_1.PRIMARY_COLOR)
                    .bold(_environments_1.PORT.toString())}/${_environments_1.END_POINT}`, 'Bootstrap', false),
                common_1.Logger.log(`🚀  Subscriptions ready at ws://${_environments_1.DOMAIN}:${chalk
                    .hex(_environments_1.PRIMARY_COLOR)
                    .bold(_environments_1.PORT.toString())}/${_environments_1.END_POINT}`, 'Bootstrap', false))
            : common_1.Logger.log(`🚀  Server is listening on port ${chalk
                .hex(_environments_1.PRIMARY_COLOR)
                .bold(_environments_1.PORT.toString())}`, 'Bootstrap', false);
    }
    catch (error) {
        common_1.Logger.error(`❌  Error starting server, ${error}`, '', 'Bootstrap', false);
        process.exit();
    }
}
bootstrap().catch((e) => {
    common_1.Logger.error(`❌  Error starting server, ${e}`, '', 'Bootstrap', false);
    throw e;
});
//# sourceMappingURL=main.js.map