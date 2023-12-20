"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (_, res) => {
    res.send("Bem vindo ao curso de TypeScript!");
});
function criaPet(id, nome, especie, idade, adotado) {
    return {
        id,
        nome,
        especie,
        idade,
        adotado,
    };
}
let id = 0;
function geraId() {
    id = id + 1;
    return id;
}
app.post("/pets", (_, res) => {
    const pet1 = criaPet(geraId(), "Bolt", "cachorro", 3, false);
    const pet2 = criaPet(geraId(), "Mel", "gato", 2, false);
    res.send([pet1, pet2]);
});
exports.default = app;
