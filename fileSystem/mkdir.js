const fs = require('fs')

function crearDirectorio(ruta) {
  // Comprobar si el directorio existe
  if (fs.existsSync(ruta)) { // Si existe
    console.log('El directorio ya existe')
  } else { // Si no existe, crearlo
    fs.mkdir(ruta, function (err) {
      if (err) { // Si ocurre algún error
        console.log(err)
      } else { // Si no ocurre error
        console.log('Directorio creado')
      }
    })
  }
}

crearDirectorio('./fileSystem/pages')
crearDirectorio('./fileSystem/images')