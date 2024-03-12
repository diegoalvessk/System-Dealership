const express = require('express');
const app = express();

app.use(express.json());

const vehicles = []

app.get('/vehicles', (req, res) => {
    console.log("Get de veículos")
    console.log(req.body)
    res.status(200).send({vehicles: vehicles})
})

app.get('/vehicles/:id', (req, res) => {
    console.log("Get de veículos por ID")
    const vehiclesId = req.params.id
    res.status(200).send(vehicles.find(x => x.id == vehiclesId))
})

app.post('/vehicles/', (req, res) => {
   console.log("Post de veículos")
   vehicles.push(req.body)
   res.status(200).send(req.body)
})



app.listen(3000, () => {
    console.log('Iniciado o servidor');
});



const express = require('express');
const app = express();

app.use(express.json());

const vehicles = []

app.get('/vehicles', (req, res) => {
    console.log("Get de veículos")
    console.log(req.body)
    res.status(200).send({vehicles: vehicles})
})

app.get('/vehicles/:id', (req, res) => {
    console.log("Get de veículos por ID")
    const vehiclesId = req.params.id
    res.status(200).send(vehicles.find(x => x.id == vehiclesId))
})

app.post('/vehicles/', (req, res) => {
   console.log("Post de veículos")
   vehicles.push(req.body)
   res.status(200).send(req.body)
})



app.listen(3000, () => {
    console.log('Iniciado o servidor');
});



