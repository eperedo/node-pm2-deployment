module.exports = {
	/**
	 * Application configuration section
	 * http://pm2.keymetrics.io/docs/usage/application-declaration/
	 */
	apps: [
		{
			name: 'app-1',
			script: 'src/index.js',
			env: {
				PORT: 1500,
			},
			env_production: {
				NODE_ENV: 'production',
			},
		},
	],

	/**
	 * Deployment section
	 * http://pm2.keymetrics.io/docs/usage/deployment/
	 */
	deploy: {
		production: {
			host: 'localhost',
			ref: 'origin/master',
			repo: 'git@github.com:eperedo/node-pm2-deployment.git',
			path: '/Users/eduardo/workspace/courses/node-pm2-deploy/www/app-1',
			'post-deploy':
				'npm install --production && pm2 startOrGracefulReload ecosystem.config.js --update-env',
		},
	},
};
