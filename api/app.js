const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const product_router = require('./routes/products.route.js')
const mongoose = require('mongoose')
const cors = require('cors')
let port = 3000

//connect to db
let dev_db_url = 'mongodb+srv://root:h4k9ePoq2RGY5Bzz@cluster0-wcoki.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{useNewUrlParser : true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
 
app.use('/products',product_router)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})





