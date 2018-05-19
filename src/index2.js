'use strict';

require('dotenv').config();
const Hapi = require('hapi');

const server = new Hapi.Server({
	host: '0.0.0.0',
	port: process.env.PORT,
});

(async () => {
	await server.start();
	console.log(`Server ${process.env.NAME_APP} Started at ${server.info.uri}`);
})();
