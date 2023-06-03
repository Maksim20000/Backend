"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
const middleWare = (0, body_parser_1.default)({});
app.use(middleWare);
app.get('/', (req, res) => {
    let hellowWorld = 'Начальный экран';
    res.send(hellowWorld);
});
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'potato' }, { id: 3, title: 'lalla' }];
const address = [{ id: 1, value: "Moskov" }, { id: 2, value: 'Vladivostok' }];
const tovars = [{ id: 1, title: 'попа' }, { id: 2, title: 'сиси' }, { id: 3, title: 'гандн' }];
app.get('/tovars', (req, res) => {
    res.send(tovars);
});
app.put('/tovars/:id', (req, res) => {
    let updateTitle = tovars.find(t => t.id === +req.params.id);
    if (updateTitle) {
        updateTitle.title = req.body.title;
        res.send(updateTitle);
    }
    else {
        res.send(404);
    }
});
app.post('/tovars', (req, res) => {
    let NewTowar = {
        id: 10,
        title: req.body.title
    };
    tovars.push(NewTowar);
    res.status(200).send(NewTowar);
});
app.delete('/tovars/:id', (req, res) => {
    for (let i = 0; i < tovars.length; i++) {
        if (tovars[i].id === +req.params.id) {
            tovars.splice(i, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
});
app.get('/products', (req, res) => {
    if (req.query.title) {
        let searchString = req.query.title;
        res.send(products.filter(p => p.title.indexOf(searchString.toString()) > -1));
    }
    else {
        res.send(products);
    }
});
app.put('/products/:id', (req, res) => {
    let product = products.find(p => p.id === +req.params.id);
    if (product) {
        product.title = req.body.title;
        res.send(product);
    }
    else {
        res.send(404);
    }
});
app.post('/products', (req, res) => {
    const newProduct = {
        id: 5,
        title: req.body.title
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});
app.get('/products/:id', (req, res) => {
    let id = req.params.id;
    let elementProduct = products.find(p => p.id === +id);
    if (elementProduct) {
        res.send(elementProduct);
    }
    else {
        res.send(404);
    }
});
app.post('/address', (req, res) => {
    let newPostAddress = {
        id: 10,
        value: req.body.value
    };
    address.push(newPostAddress);
    res.status(200).send(newPostAddress);
});
app.delete('/products/:id', (req, res) => {
    let id = req.params.id;
    let elementProduct = products.find(p => p.id === +id);
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
});
app.get('/address/:idUser', (req, res) => {
    let UserId = req.params.idUser;
    let elementAddressId = address.find(a => a.id === +UserId);
    if (elementAddressId) {
        res.send(elementAddressId);
    }
    else {
        res.send(404);
    }
});
app.put('/address/:id', (req, res) => {
    let addressUpdate = address.find(p => p.id === +req.params.id);
    if (addressUpdate) {
        addressUpdate.value = req.body.value;
        res.send(addressUpdate);
    }
});
app.get('/address', (req, res) => {
    res.send(address);
});
app.delete('/address/:idUser', (req, res) => {
    for (let i = 0; i < address.length; i++) {
        if (address[i].id === +req.params.idUser) {
            address.splice(i, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
});
app.listen(port, () => {
    console.log('Вроде все работает ');
});
