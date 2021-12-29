"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const _environments_1 = require("./environments");
const config_1 = require("./config");
const doctor_entity_1 = require("./doctor/entities/doctor.entity");
const doctor_module_1 = require("./doctor/doctor.module");
const record_module_1 = require("./record/record.module");
const record_entity_1 = require("./record/entities/record.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_1.CacheModule.registerAsync({
                useClass: config_1.CacheService,
            }),
            typeorm_1.TypeOrmModule.forRoot(Object.assign(Object.assign({}, _environments_1.TYPEORM_MAIN), { synchronize: _environments_1.NODE_ENV === 'production' ? false : true, entities: [doctor_entity_1.Doctor, record_entity_1.Record] })),
            doctor_module_1.DoctorModule,
            record_module_1.RecordModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map