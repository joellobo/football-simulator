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
      {id: 1, name:'Flamengo',shield:'http://storage.footballsimulator.com/flamengo-shield.svg'},
      {id: 2, name:'São Paulo',shield:'http://storage.footballsimulator.com/sao-paulo-shield.svg'},
      {id: 3, name:'Internacional',shield:'http://storage.footballsimulator.com/internacional-shield.svg'},
    ]
  res.json(teams)
})

app.get('/players', (req, res) => {
  const teams = 
    [
      {id: 1, name:'Gabi',ofensiveScore:79,defensiveScore:45},
      {id: 2, name:'Isla',ofensiveScore:79,defensiveScore:45},
      {id: 3, name:'Rodrigo Caio',ofensiveScore:79,defensiveScore:45},
      {id: 4, name:'Gerson',ofensiveScore:79,defensiveScore:45},
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
  res.json(teams)
})

app.get('/friendlies', (req, res) => {
  const teams = 
    [
      {
        id: 1, 
        status: 'Finish',
        teamAtHome: {
          id: 100,
          name:'Flamengo'
        },
        scoreTeamAtHome: 2,
        teamAtHome: {
          id: 101,
          name:'Internacional'
        },
        scoreTeamGuest: 0,
    }
    ]
  res.json(teams)
})

app.get('/friendly/1000', (req, res) => {
  const teams = 
    [
      {
        id: 1, 
        teamAtHome: {
          id: 100,
          name:'Flamengo'
        },
        teamAtHome: {
          id: 101,
          name:'Internacional'
        },
        actions: [
          {
            id: 1000,
            description: "Everton Ribeiro faz um passe no meio para Gabriel, que é derrubado por Digão."
          },
          {
            id: 1001,
            description: "Vitinho cobra falta pelo meio. A bola desvia na marcação e sai em escanteio a favor do Flamengo."
          },
          {
            id: 1003,
            description: "Vitinho cobra falta pelo meio. A bola desvia na marcação e sai em escanteio a favor do Flamengo."
          },
        ]
    }
    ]
  res.json(teams)
})

app.listen(port, () => {
  console.log(`Football Simulator starting at http://localhost:${port}`)
})