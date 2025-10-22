const fs = require('fs')

function leerCarpeta(ruta) {
  fs.readdir(ruta, function (err, archivos) {
    if (err) {
      console.log(err)
    } else {
      console.log(archivos)
    }
  })
}

const ruta = './fileSystem'
leerCarpeta(ruta)
leerCarpeta(ruta + '/pages')
leerCarpeta('./')
