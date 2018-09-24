const express = require('express');
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan')
const shirtRouter = require('./routes/shirtRouter')
const PORT = process.env.PORT || 4444 //double check this
const env = require('dotenv')
const sgMail = require('@sendgrid/mail')

env.config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//middleware
app.use(express.json())
app.use(morgan('dev'))

//connect mongo for fullstack project
mongoose.connect(`mongodb://localhost:27017/shirt-db`, { useNewUrlParser: true}, )
    .then(() => console.log('MongoDB is now connected'))
    .catch(err => console.error(err))


//Routes
app.use('/shirts', shirtRouter)

// logic backend for sending mail
app.post('/send', (req, res) =>{
    const msg ={
        to: process.env.DB_USER,
        from: req.body.email,
        subject: req.body.fName + " " + req.body.lName + "Has sent a Message from Shirt-app",
        text: req.body.message
    };
    console.log(msg)
    sgMail.send(msg)
})

//listen
app.listen(PORT, () =>{
    console.log(`Your server is running on port ${PORT}`)
})

