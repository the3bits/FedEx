const express = require('express')
const ejsMate = require('ejs-mate')

const path = require('path')
// const methodOverride = require('method-override')
// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/fedex', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// })

// const db =  mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', () => {
//     console.log('connected to mongodb')
// })

const app = express()

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
// app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/ship', (req,res)=>{
    res.render('ship')
})
app.listen('3000', () => {
    'Listening to PORT 3000'
})