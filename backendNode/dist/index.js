"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(router_1.default);
app.listen(8080, function () {
    console.log("Servidor rodando");
});
