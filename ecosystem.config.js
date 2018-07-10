module.exports = {
  apps : [{
    name      : 'API',
    script    : 'app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'developer',
      key: '/Users/evgeniyyemelin/.ssh/digitocean.pub',
      host : '178.62.218.228',
      ref  : 'origin/master',
      repo : 'git@bitbucket.org:eyemelin/my-express-deploy-exp.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
