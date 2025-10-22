const fs = require('fs')

function crearArchivo(ruta, contenidoArchivo) {
  // Comprobar si el archivo existe
  if (fs.existsSync(ruta)) {
    // Si existe
    console.log('El archivo ya existe')
  } else {
    // Si no existe, crearlo
    fs.writeFile(ruta, contenidoArchivo, function (err) {
      if (err) { // Si ocurre algún error
        console.log(err)
      } else { // Si no ocurre error
        console.log('Archivo creado')
      }
    })
  }
}

const contenidoArchivo = '<h1> Hola mundo! </h1>'
const ruta = './fileSystem/pages/index.html'
crearArchivo(ruta, contenidoArchivo)
crearArchivo('./fileSystem/pages/contacto.html', '<h1> Pagina de contacto </h1>')