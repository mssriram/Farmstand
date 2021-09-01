const Product = require('./models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Mongo connected!!....')
    })
    .catch(err => {
        console.log(err)
    });

const seedProducts = [
    {
        name: 'Banana',
        price: '74',
        category: 'fruit',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000031_21-fresho-banana-yelakki.jpg'
    },
    {
        name: 'Apple',
        price: '167',
        category: 'fruit',
        image: 'https://www.bigbasket.com/media/uploads/p/s/40033824_19-fresho-apple-red-delicious-regular.jpg'
    },
    {
        name: 'Watermelon',
        price: '49',
        category: 'fruit',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000207_20-fresho-watermelon-small.jpg'
    },
    {
        name: 'Papaya',
        price: '34',
        category: 'fruit',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000152_19-fresho-papaya-medium.jpg'
    },
    {
        name: 'Pineapple',
        price: '45',
        category: 'fruit',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000156_19-fresho-pineapple.jpg'
    },
    {
        name: 'Plum',
        price: '125',
        category: 'fruit',
        image: 'https://www.bigbasket.com/media/uploads/p/s/40218329_2-fresho-plum-indian.jpg'
    },
    {
        name: 'Grapes',
        price: '50',
        category: 'fruit',
        image: 'https://www.bigbasket.com/media/uploads/p/s/20000707_12-fresho-grapes-bangalore-blue-with-seed.jpg'
    },
    {
        name: 'Onion',
        price: '34',
        category: 'vegetable',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg'
    },
    {
        name: 'Tomato',
        price: '30',
        category: 'vegetable',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg'
    },
    {
        name: 'Potato',
        price: '18',
        category: 'vegetable',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg'
    },
    {
        name: 'Capsicum',
        price: '18',
        category: 'vegetable',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000068_22-fresho-capsicum-green.jpg'
    },
    {
        name: 'Ladies Finger',
        price: '18',
        category: 'vegetable',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg'
    },
    {
        name: 'Chillies',
        price: '25',
        category: 'vegetable',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000082_19-fresho-chilli-green-long-medium.jpg'
    },
    {
        name: 'Carrot',
        price: '32',
        category: 'vegetable',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000271_13-fresho-carrot-ooty.jpg'
    },
    {
        name: 'Beans',
        price: '44',
        category: 'vegetable',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000044_42-fresho-beans-french-ring.jpg'
    },
    {
        name: 'Beetroot',
        price: '24',
        category: 'vegetable',
        image: 'https://www.bigbasket.com/media/uploads/p/s/10000046_17-fresho-beetroot.jpg'
    },
    {
        name: 'Milk',
        price: '25',
        category: 'dairy',
        image: 'https://www.bigbasket.com/media/uploads/p/s/306926_4-amul-homogenised-toned-milk.jpg'
    },
    {
        name: 'Cheese',
        price: '230',
        category: 'dairy',
        image: 'https://www.bigbasket.com/media/uploads/p/s/1202761_1-amul-cheese-slices.jpg'
    },
    {
        name: 'Butter',
        price: '93',
        category: 'dairy',
        image: 'https://www.bigbasket.com/media/uploads/p/s/40045943_1-amul-butter-pasteurised.jpg'
    },
    {
        name: 'Curd',
        price: '39',
        category: 'dairy',
        image: 'https://www.bigbasket.com/media/uploads/p/s/40004532_8-mother-dairy-dahi-made-from-toned-milk.jpg'
    },
]

Product.remove({});
Product.insertMany(seedProducts)
    .then(data => console.log(data))
    .catch(err => console.log(err));