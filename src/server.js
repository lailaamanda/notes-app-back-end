/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },             
    },
  });
  
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();