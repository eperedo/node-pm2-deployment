'use strict';

const path = require('path');

require('dotenv').config({
	path: `${path.dirname(__dirname)}/.env`,
});

console.log('REPO', process.env.repositories);
console.log('REPO', process.env.DATABASE);

const Hapi = require('hapi');

const server = new Hapi.Server({
	host: '0.0.0.0',
	port: process.env.PORT,
});

(async () => {
	await server.start();
	console.log(`Server ${process.env.NAME_APP} Started at ${server.info.uri}`);
})();
