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
exports.Turma = void 0;
const typeorm_1 = require("typeorm");
const Pagamento_1 = require("./Pagamento");
let Turma = class Turma {
};
exports.Turma = Turma;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id_turma' }),
    __metadata("design:type", String)
], Turma.prototype, "idTurma", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Turma.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Turma.prototype, "turno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ano_ref', type: 'int' }),
    __metadata("design:type", Number)
], Turma.prototype, "anoRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'semestre_ref', type: 'int' }),
    __metadata("design:type", Number)
], Turma.prototype, "semestreRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor_face', type: 'float' }),
    __metadata("design:type", Number)
], Turma.prototype, "valorFace", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Pagamento_1.Pagamento, (pagamento) => pagamento.turma),
    __metadata("design:type", Array)
], Turma.prototype, "pagamentos", void 0);
exports.Turma = Turma = __decorate([
    (0, typeorm_1.Entity)('turmas')
], Turma);
