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

app.put('/vehicles/:id', (req, res) => {
    const vehicle = users.find(x => x.id == req.params.id)
    const idVehicle = users.indexOf(vehicle)
    users[idVehicle] = req.body
    res.status(200).send('Veículo Atualzado com sucesso')
 })
 
 
app.delete('/vehicles/:id', (req, res) => {
    const vehicle = users.find(x => x.id == req.params.id)
    const idVehicle = users.indexOf(vehicle)
    users.splice(idVehicle, 1)
    res.status(200).send('Veículo deletado com sucesso')
})


app.listen(3000, () => {
    console.log('Iniciado o servidor');
});



