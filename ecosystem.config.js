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
      user : 'root',
      key: '~/.ssh/digitalocean',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'git@bitbucket.org:eyemelin/my-express-deploy-exp.git',
      path : './test',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
