const fs = require('fs')

const ruta = './index.html'

function leerArchivo(ruta) {
  fs.readFile(ruta, 'utf8', function (err, datos) {
    if (err) {
      console.log(err)
    } else {
      console.log(datos)
    }
  })
}

leerArchivo(ruta)
leerArchivo('./contacto.html')