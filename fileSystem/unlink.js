const fs = require('fs')

function borrarArchivo(ruta) {
  // Comprobar si el archivo existe
  if (fs.existsSync(ruta)) {
    fs.unlink(ruta, function (err) {
      if (err) {
        console.log(err.message)
      } else {
        console.log('El archivo se ha eliminado correctamente.')
      }
    })
  } else {
    console.log('El archivo no existe')
  }
}

const ruta = './fileSystem/index.html'
borrarArchivo(ruta)
borrarArchivo('./fileSystem/contacto.html')
