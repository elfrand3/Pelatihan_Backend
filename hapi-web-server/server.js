// console.log('Halo, kita akan belajar membuat server menggunakan Hapi');

// Membuat HTTP Server

// const Hapi = require('@hapi/hapi');
 
// const init = async () => {
//     const server = Hapi.server({
//         port: 5000,
//         host: 'localhost',
//     });
 
//     await server.start();
//     console.log(`Server berjalan pada ${server.info.uri}`);
// };
 
// init();

// Method/Verb Request dan Routing


const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: (request, h) => {
    //         return 'Hello World!';
    //     }
    // });

    // server.route([
    //     {
    //         method: 'GET',
    //         path: '/',
    //         handler: (request, h) => {
    //             return 'Homepage';
    //         },
    //     },
    //     {
    //         method: 'GET',
    //         path: '/about',
    //         handler: (request, h) => {
    //             return 'About Page';
    //         },
    //     },
    // ]);

    server.route(routes);

    // server.route({
    //     method: 'POST',
    //     path: '/login',
    //     handler: (request, h) => {
    //         const { username, password } = request.payload;
    //         return `Welcome ${username}!`;
    //     },
    // });
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();