const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contacto', (req, res) => {
  res.send('<h1> Pagina de contacto </h1>')
})

// Atrapar todas las peticiones que no se encuentren en la ruta
app.use((req, res) => {
  res.send('<h1> 404 - No encontrado </h1>')
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
