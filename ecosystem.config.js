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
      user : 'root',
      ssh_options: "StrictHostKeyChecking=no",
      key: '~/.ssh/digitocean.pub',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'git@github.com:jeka1985/express-experiment.git',
      path : './test',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
