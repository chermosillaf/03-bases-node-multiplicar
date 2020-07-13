/**
 * 
 */

// const argv = require('yargs')
//     .command( 'listar'
//             , 'Imprime en consola la tabla de multiplicar'
//             , { 
//                 base:   { demand: true
//                         , alias: 'b'
//                         , description: 'Base de multiplicar'
//                     } 
//                ,limite: { demand: false
//                         , alias: 'l'
//                         , description: 'Limite máximo de cantidad'
//                         , default: 10 }
//               }
            
//             )
//     .command( 'crear'
//             , 'Genera Archivo con las tabla de multiplicar'
//             , { 
//                 base:   { demand: true
//                         , alias: 'b'
//                         , description: 'Base de multiplicar'
//                     } 
//                 ,limite: { demand: false
//                         , alias: 'l'
//                         , description: 'Limite máximo de cantidad'
//                         , default: 10 }
//               }
    
//     )

//     .help()        
//     .argv;

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

//
// obtenemos el primer valor del arreglo '_' 
//
let comando = argv._[0];

// 
//  Evaluamos los comenados 
//

switch (comando) {
    case 'listar':
        
        listarTabla(argv.base, argv.limite)
            .then ( mensaje => console.log(mensaje) )
            .catch( err     => console.log(err) )
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then ( archivo => console.log('Archivo ', colors.verbose(archivo), 'creado '))
            .catch( err     => console.log(err));

        break;
    
    default:
        console.log('comando no reconocido');
        break;
}


// console.log(process.argv);


console.log(argv);

// console.log(argv2);

// let parametros = argv[2]
// let base = parametros.split("=")[1];
/*
if (!base)
{
    base = 1;
}
// console.log(base);


// console.log(module);






*/