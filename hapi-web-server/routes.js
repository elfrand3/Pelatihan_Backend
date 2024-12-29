// const routes = [
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
//             return 'About page';
//         },
//     },
// ];
 
// module.exports = routes;

// const routes = [
//     {
//         method: 'GET',
//         path: '/',
//         handler: (request, h) => {
//             return 'Homepage';
//         },
//     },
//     {
//         method: '*',
//         path: '/',
//         handler: (request, h) => {
//             return 'Halaman tidak dapat diakses dengan method tersebut';
//         },
//     },
//     {
//         method: 'GET',
//         path: '/about',
//         handler: (request, h) => {
//             return 'About page';
//         },
//     },
//     {
//         method: '*',
//         path: '/about',
//         handler: (request, h) => {
//             return 'Halaman tidak dapat diakses dengan method';
//         },
//     },
//     {
//         method: '*',
//         path: '/{any*}',
//         handler: (request, h) => {
//             return 'Halaman tidak ditemukan';
//         },
//     },
// ];

const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'Homepage About';
        },
    },

    // path parameter
    {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
        const { name = "stranger" } = request.params;
        const { lang } = request.query;
 
        if(lang === 'id') {
            return `Hai, ${name}!`;
        }

        return `Hello, ${name}!`;
        },
    },
    {
        method: 'GET',
        path: '/{any*}',
        handler: (request, h) => {
            return ' Halaman tidak ditemukan';
        },
    },
];

module.exports = routes;