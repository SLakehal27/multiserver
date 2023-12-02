const express = require('express');
const router = require('./router/router');
const app = express();
const PORT = 5020;

app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true}));
app.use("/games",router);
app.listen(PORT, ()=>{console.log(`Server listening to port ${PORT}`)});
