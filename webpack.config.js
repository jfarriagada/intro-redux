const webpack = require("webpack");
// Creamos la constante para guardar webpack

const path = require("path");
// Requerimos path para manejar con más facilidad las rutas

module.exports = {
  entry: {
    app: './app.js'
  },
  // Punto de entrada para construir los scripts
  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
    // Directorio de destino del archivo ya compilado
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
        // Con styles-loader, podemos desde nuestro módulos de JS cargar
        // archivos de estilos y que se agreguen a etiquetas style
        // o generar un archivo .css.
        // Y con css-loader cargar archivos .css en nuestros archivos JS,
        // es necesario para usar styles-loader
      },
      {
        test: /\.js?$/,
        exclude: /node-modules/,
        loader: 'babel',
        // Con loader lo que conseguimos es poder modificar los archivos,
        // en este caso lo que conseguimos es que babel transpile la sintaxis de ES6
        // a ES5 para que los navegadores puedan interpretarla, y se van a excluir los
        // paquetes que no se requieran del directorio node-modules.
        query: {
          presets: ['react', 'es2015']
        }
        // Tenemos que especificar las dependencias de babel ya que en su nueva versión,
        // no vienen especificadas por defecto.
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
};
