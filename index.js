const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3010

const app = express()

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:Passw0rd@cluster0.5uch4.mongodb.net/auth?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Server started on ${PORT} port`))
    } catch (error) {
        console.log(error)
    }
}

start()