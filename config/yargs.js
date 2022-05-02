const argv = require('yargs')
                    .option('b', 
                    { alias:'base', 
                    type:'number',
                    demandOption: true,
                    describe: 'La tabla de multiplicar saldrá en base a este valor' 
                    })
                    .option('l',
                    {alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Permite decidir si se muestra la tabla de multiplicar por consola'
                    })
                    .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Máximo valor de la lista en la tabla de multiplicar'
                    })
                    .check( ( argv, options ) => {
                        if( isNaN( argv.b ) ){
                            throw 'La base tiene que ser un número'
                        }
                        return true
                    } )
                    .argv;

module.exports = argv;