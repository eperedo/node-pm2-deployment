'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server({
	host: '0.0.0.0',
	port: 2000,
});

(async () => {
	await server.start();
	console.log(`Server Started at ${server.info.uri}`);
})();
