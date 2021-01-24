const express = require('express')
const app = express()
const port = 3000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/teams', (req, res) => {
  const teams = 
    [
      {id: 1, name:'Flamengo'},
      {id: 2, name:'São Paulo'},
      {id: 3, name:'Internacional'},
    ]
  res.json(teams)
})

app.get('/players', (req, res) => {
  const teams = 
    [
      {id: 1, name:'Gabi'},
      {id: 2, name:'Isla'},
      {id: 3, name:'Rodrigo Caio'},
    ]
  console.log(teams)
  res.json(teams)
})


app.get('/championships', (req, res) => {
  const teams = 
    [
      {id: 1, name:'Brasileirão Série A'},
      {id: 2, name:'Brasileirão Série B'},
      {id: 3, name:'Série C'},
      {id: 4, name:'Série D'},
    ]
  console.log(teams)
  res.json(teams)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})