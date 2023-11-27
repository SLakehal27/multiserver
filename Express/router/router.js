const router = require('express').Router();
const fs = require('fs');
const data = require('../data/games.json');
const gamePath = './data/games.json';
const { HTTP } = require('../http');

router.get("/",(req,res)=>{
    try{
        if(data.length !== 0){
            res.status(HTTP.SUCCESS).json(data);
        }
        res.status(HTTP.NO_CONTENT).send();
    }
    catch(error){
        res.status(HTTP.SERVER_ERROR).send(error);
    }
})

router.get("/:id",(req,res)=>{
    try{
        const id = parseInt(req.params.id);
        const elem = data.filter(elem=>elem.id === id);
        if(elem.length !== 0){
            res.status(HTTP.SUCCESS).json(elem);
        }
        res.status(HTTP.NO_CONTENT).send();
    }
    catch(error){
        res.status(HTTP.SERVER_ERROR).send(error);
    }
})

router.post("/",(req,res)=>{
    try{
        const recentGame = {
            id: data.length,
            title: req.body.title,
            release: req.body.release
        };
        data[data.length] = recentGame;

        if(recentGame.title && recentGame.release > 0) {
            fs.writeFileSync(gamePath,JSON.stringify(data,null,2),'utf-8');
            res.status(HTTP.CREATED).json(data);
        }
        res.status(HTTP.BAD_REQUEST).send();
    }
    catch(error){
        res.status(HTTP.SERVER_ERROR).send(error);
    }
})

router.delete("/:id",(req,res)=>{
    try{
        const id = parseInt(req.params.id);
        console.log(id);
        const gameList = data.filter(game=>game.id !== id);
        if(gameList[id]) {
            fs.writeFileSync(gamePath,JSON.stringify(gameList,null,2),'utf-8');
            res.status(HTTP.SUCCESS).json(gameList);
        }
        res.status(HTTP.BAD_REQUEST).send();
    }
    catch(error){
        res.status(HTTP.SERVER_ERROR).send(error);
    }
})

router.patch("/",(req,res)=>{
    try{
        const recentGame = req.body;
    
        if(data[recentGame.id] && recentGame.title && recentGame.release) {
            data[recentGame.id] = recentGame;
            console.log(data);
            fs.writeFileSync(gamePath,JSON.stringify(data,null,2),'utf-8');
            res.status(HTTP.SUCCESS).json(data);
        }
        res.status(HTTP.BAD_REQUEST).send();
    }
    catch(error){
        res.status(HTTP.SERVER_ERROR).send(error);
    }
})

module.exports = router;