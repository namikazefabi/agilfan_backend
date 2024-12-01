"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Usuario_1 = require("../entity/Usuario");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UsuarioService {
    constructor() {
        this.usuarioRepository = data_source_1.AppDataSource.getRepository(Usuario_1.Usuario);
    }
    listarUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usuarioRepository.find();
        });
    }
    obterUsuario(matricula) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usuarioRepository.findOneBy({ matricula });
        });
    }
    criarUsuario(dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioExistente = yield this.usuarioRepository.findOneBy({ matricula: dados.matricula });
            if (usuarioExistente) {
                throw new Error('Usuário já existe com esta matrícula.');
            }
            const saltRounds = 10;
            const senhaHashed = yield bcrypt_1.default.hash(dados.password, saltRounds);
            dados.password = senhaHashed;
            const novoUsuario = this.usuarioRepository.create(dados);
            return this.usuarioRepository.save(novoUsuario);
        });
    }
    atualizarUsuario(matricula, dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioExistente = yield this.usuarioRepository.findOneBy({ matricula });
            if (!usuarioExistente) {
                return null;
            }
            if (dados.password) {
                const saltRounds = 10;
                dados.password = yield bcrypt_1.default.hash(dados.password, saltRounds);
            }
            Object.assign(usuarioExistente, dados);
            return this.usuarioRepository.save(usuarioExistente);
        });
    }
    deletarUsuario(matricula) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield this.usuarioRepository.delete({ matricula });
            return resultado.affected !== 0;
        });
    }
}
exports.default = new UsuarioService();
