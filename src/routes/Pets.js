const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const PetManager = require('../manager/pets');

const uploader = require('../services/Upload.js');

const petService = new PetManager();

router.get('/',(req,res)=>{
    petService.get().then(result=>res.send(result))
})

router.post('/',uploader.single('file'),(req,res)=>{
    let pet = req.body;
    let file = req.file;
    if(!file)   return res.status(500).send({error:"Couldnt Upload File"})
    pet.thumbnail = req.protocol+"://"+req.hostname+":8080/img/"+file.filename;
    petService.add(pet).then(result=>res.send(result));
})

module.exports = router;