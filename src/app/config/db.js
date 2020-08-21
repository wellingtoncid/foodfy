const {
  Pool
} = require('pg');

module.exports = new Pool({
  user: 'foodfy',
  password: 'foodfy',
  host: 'localhost',
  port: 5432,
  database: 'foodfydb',
});