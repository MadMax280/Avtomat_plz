"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record = void 0;
const doctor_entity_1 = require("../../doctor/entities/doctor.entity");
const typeorm_1 = require("typeorm");
let Record = class Record {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], Record.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'name', nullable: false }),
    __metadata("design:type", String)
], Record.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'surName', nullable: false }),
    __metadata("design:type", String)
], Record.prototype, "surName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'lastName', nullable: false }),
    __metadata("design:type", String)
], Record.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'snils', nullable: false }),
    __metadata("design:type", String)
], Record.prototype, "snils", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'doctorId', nullable: false }),
    __metadata("design:type", Number)
], Record.prototype, "doctorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', name: 'time', nullable: false }),
    __metadata("design:type", Date)
], Record.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'createdAt',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], Record.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_entity_1.Doctor, (doctor) => doctor.record, {
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'doctorId', referencedColumnName: 'id' }]),
    __metadata("design:type", doctor_entity_1.Doctor)
], Record.prototype, "doctor", void 0);
Record = __decorate([
    (0, typeorm_1.Entity)('records'),
    (0, typeorm_1.Index)('FK_doctor_user', ['doctorId'], {})
], Record);
exports.Record = Record;
//# sourceMappingURL=record.entity.js.map