const knexConfig = require('./knexfile').development;

const knex = require('knex')(knexfile)