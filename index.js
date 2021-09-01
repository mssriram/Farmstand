const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var methodOverride = require('method-override')

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true }));   
app.use(methodOverride('_method'));


const Product = require('./models/product');
const categories = ['fruit', 'vegetable', 'dairy'];

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => {
        console.log('Mongo connected!!....')
    })
    .catch(err => {
        console.log(err)
    })

app.get('/', (req, res) => {
    res.redirect('/products');
})

app.get('/products', async (req, res) => {
    const {category} = req.query;
    if (category){
        const products = await Product.find({ category: category });
        return res.render('products/index', {products, category});
    }
    else{
        const products = await Product.find({});
        return res.render('products/index', {products, category: 'All'});
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/newProductForm', {categories});
})

app.post('/products', async (req, res) => {
    const newProduct = new Product({name: req.body.name, price: req.body.price, category: req.body.category, image: req.body.image});
    await newProduct.save();
    res.redirect('/products');
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/showProduct', { product });
})

app.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    const query = {_id: id};
    const newProduct = req.body;
    await Product.findOneAndUpdate(query, newProduct, {runValidators: true});
    res.redirect('/products')
})

app.delete('/products/:id', async (req, res) => {
    const {id} = req.params;
    await Product.findByIdAndRemove(id);
    res.redirect('/products');
})

app.get('/products/:id/edit', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/editProductForm', {product, categories}); 
})

app.listen(3000, () => {
    console.log('listening on 3000...');
})