const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
// Cargar variables de entorno
process.loadEnvFile()

const ruta = './data/trailerflix.json'
const trailersJSON = fs.readFileSync(ruta, 'utf-8')
const trailers = JSON.parse(trailersJSON)

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, process.env.WEBSITE)))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contacto', (req, res) => {
  res.send('<h1> Pagina de contacto </h1>')
})

app.get('/carpetaActual', (req, res) => {
  res.send(__dirname)
})

// Traer Trailers
app.get('/trailers', (req, res) => {
  res.send(trailers)
})

// Traer Trailers por Id
app.get('/trailers/:id', (req, res) => {
  const  id  = Number(req.params.id)
  const trailer = trailers.find(trailer => trailer.id == id)
  if (trailer) {
    res.status(200).send(trailer)
  } else {
    res.status(404).send('<h1> 404 - Trailer no encontrado </h1>')
  }
})

// Atrapar todas las peticiones que no se encuentren en la ruta
app.use((req, res) => {
  res.send('<h1> 404 - No encontrado </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
})
