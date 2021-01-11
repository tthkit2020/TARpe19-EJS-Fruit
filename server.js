const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', ejs);

app.get('/', (req, res)=>{

    let fruit = {
        objectName: 'Fruit for User',
        fruit: ['apple', 'banana', 'orange']
    };

    res.render('index.ejs', {fruitForUser: fruit});
});



app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});