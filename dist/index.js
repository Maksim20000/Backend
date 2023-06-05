"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_router_1 = require("./routes/products-router");
const addresses_router_1 = require("./routes/addresses-router");
const tovars_router_1 = require("./routes/tovars-router");
const app = (0, express_1.default)();
const port = 3000;
const middleWare = (0, body_parser_1.default)({});
app.use(middleWare);
app.use('/products', products_router_1.productsRouter);
app.use('/address', addresses_router_1.addressesRouter);
app.use('/tovars', tovars_router_1.tovarsRouter);
app.get('/', (req, res) => {
    let hellowWorld = 'Начальный экран';
    res.send(hellowWorld);
});
app.listen(port, () => {
    console.log('Вроде все работает ');
});
