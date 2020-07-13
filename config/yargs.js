/**
 *  YARGS 
 */

const appOptions = {
    base:   { 
          demand: true
        , alias: 'b'
        , description: 'Base de multiplicar'
    } 
    ,limite: { 
          demand: false
        , alias: 'l'
        , description: 'Limite máximo de cantidad'
        , default: 10 
    }

}

const argv = require('yargs')
.command( 'listar'
        , 'Imprime en consola la tabla de multiplicar'
        , appOptions
        
        )
.command( 'crear'
        , 'Genera Archivo con las tabla de multiplicar'
        , appOptions
)
.help()        
.argv;

module.exports = {
    argv
}
