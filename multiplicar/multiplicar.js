/**
 * MULTIPLICAR 
 */

const colors = require('colors');

const fs = require('fs'); 
// const fs = require('express');
// const fs = require('./path/my-files');

let crearArchivo = (base, limite = 10) => {

    return new Promise( (resolve, reject ) => {

        if (!Number(base))
        {
            reject('No es un número');
            return;
        }

        if (!Number(limite))
        {
            reject('El límite No es un número');
            return;
        }
    

        let data = '';

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${ base * i }`);
            data +=`${base} * ${i} = ${ base * i } \n`;
            
        } 
        
        const data2 = new Uint8Array(Buffer.from(data));
        
        fs.writeFile(`./tablas/tabla-${ base }.txt`, data2, (err) => {
            if (err) 
            {
                reject(err);
            }
            else 
            {
                resolve(`tabla-${ base }.txt`);
            }
            // throw err;
          // console.log('El archivo ha sido creado !');
        });
        


    });
}


let listarTabla = async (base, limite = 10) => {

    if (!Number(base))
    {
        throw new Error('La base No es un número');
    }

    if (!Number(limite))
    {
        throw new Error('El límite No es un número');
    }

    let data = '';

    console.log('==================================================='.green);
    console.log(`tabla del ${ base }`.green);
    console.log('==================================================='.green);

    for (let i = 1; i <= limite; i++) 
    {
        console.log(`${base} * ${i} = ${ base * i }`);
        // data += `${base} * ${i} = ${ base * i } \n`;
    } 
    
    // return data;
    
}

module.exports = {
    crearArchivo,
    listarTabla
}

