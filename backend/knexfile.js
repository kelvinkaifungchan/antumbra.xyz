// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require('dotenv')
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      database: process.env.DB_DATABASE,
      user:     process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
    }
  },

  staging: {
    client: 'mysql',
    //staging env connection details
    //specific to setup
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    //production env connection details
    //specific to setup
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
