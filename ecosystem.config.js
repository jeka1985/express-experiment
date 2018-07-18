module.exports = {
  apps : [{
    name      : 'APP',
    script    : 'bin/www',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'deployer',
      ssh_options: "ForwardAgent=yes",
      host : '178.62.195.88',
      ref  : 'origin/master',
      repo : 'git@repo:jeka1985/express-experiment.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
