const fs = require('fs')

const agregarContenido = (ruta, contenidoArchivo) => {
  fs.appendFile(ruta, contenidoArchivo, function (err) {
    if (err) { // Si ocurre algún error
      console.log(err)
    } else { // Si no ocurre error
      console.log('Se agrego contenido al archivo')
    }
  })
}

const ruta = './fileSystem/index.html'
const contenidoArchivo = '\n<p> aquí vengo yo! </p>'
agregarContenido(ruta, contenidoArchivo)
agregarContenido('./fileSystem/contacto.html', '\n<p> correoDeContacto@gmail.com </p>')