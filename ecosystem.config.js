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
      ref  : 'master',
      repo : 'git@bitbucket.org:eyemelin/my-express-deploy-exp.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && npm start --env production'
    }
  }
};
