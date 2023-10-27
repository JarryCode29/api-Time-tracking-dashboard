"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express') --> commonjs
const statistics_1 = __importDefault(require("./routes/statistics"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!' + new Date().toLocaleDateString());
    res.send('pong');
});
app.use('/api/statistics', statistics_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
