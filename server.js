const express = require('express')
const path =  require('path')

const app = express();

const PORT = process.env.PORT || 4201

app.use(express.static(__dirname + '/dist/portfolio'));

app.get("/*", (req, res) =>{
    res.sendFile(__dirname + '/dist/portfolio/index.html')
})

app.listen(PORT, ()=>{
    console.log('Servidor iniciado na porta' + PORT)
})