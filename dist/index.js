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
let requestCounter = 0;
const requestCounterMiddleWare = (req, res, next) => {
    if (requestCounter > 3) {
        res.send('Много запросов нарушаем' + requestCounter);
        next();
    }
    else {
        requestCounter++;
        next();
    }
};
const blablaNiddleWare = (req, res, next) => {
    // @ts-ignore
    req.blabla = '12345';
    next();
};
const guardMiddleWare = (req, res, next) => {
    // @ts-ignore
    if (req.query.token === '12345') {
        next();
    }
    else {
        res.send(401);
    }
};
const middleWare = (0, body_parser_1.default)({});
app.use(middleWare, blablaNiddleWare, guardMiddleWare, requestCounterMiddleWare);
app.use('/products', products_router_1.productsRouter);
app.use('/address', addresses_router_1.addressesRouter);
app.use('/tovars', tovars_router_1.tovarsRouter);
app.get('/blabla', (req, res) => {
    // @ts-ignore
    const blabla = req.blabla;
    res.send({ value: blabla });
});
app.get('/', (req, res) => {
    let hellowWorld = 'Начальный экран';
    res.send(hellowWorld);
});
app.listen(port, () => {
    console.log('Вроде все работает ');
});
