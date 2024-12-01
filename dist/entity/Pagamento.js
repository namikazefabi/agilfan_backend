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
exports.Pagamento = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("./Usuario");
const Turma_1 = require("./Turma");
let Pagamento = class Pagamento {
};
exports.Pagamento = Pagamento;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'id_pagamento' }),
    __metadata("design:type", String)
], Pagamento.prototype, "idPagamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Pagamento.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mes_ref', type: 'int' }),
    __metadata("design:type", Number)
], Pagamento.prototype, "mesRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ano_ref', type: 'int' }),
    __metadata("design:type", Number)
], Pagamento.prototype, "anoRef", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dt_venc', type: 'timestamp' }),
    __metadata("design:type", Date)
], Pagamento.prototype, "dtVenc", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dt_pgto', type: 'timestamp', nullable: true }),
    __metadata("design:type", Object)
], Pagamento.prototype, "dtPgto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor_a_pagar', type: 'float' }),
    __metadata("design:type", Number)
], Pagamento.prototype, "valorAPagar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor_pago', type: 'float', nullable: true }),
    __metadata("design:type", Object)
], Pagamento.prototype, "valorPago", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], Pagamento.prototype, "situacao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuario_1.Usuario, (usuario) => usuario.pagamentos),
    (0, typeorm_1.JoinColumn)({ name: 'matricula' }),
    __metadata("design:type", Usuario_1.Usuario)
], Pagamento.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Turma_1.Turma, (turma) => turma.pagamentos),
    (0, typeorm_1.JoinColumn)({ name: 'id_turma' }),
    __metadata("design:type", Turma_1.Turma)
], Pagamento.prototype, "turma", void 0);
exports.Pagamento = Pagamento = __decorate([
    (0, typeorm_1.Entity)('pagamentos')
], Pagamento);
