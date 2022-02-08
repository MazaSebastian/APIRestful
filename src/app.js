const express = require('express');

const petsRouter = require('./routes/Pets');

const PetManger = require('./manager/pets');

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/pets',petsRouter);

const PORT = 8080;

const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`))