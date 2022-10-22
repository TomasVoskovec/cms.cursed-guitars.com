const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'sql732.main-hosting.eu'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'u390691127_strapi'),
      user: env('DATABASE_USERNAME', 'u390691127_tomas_voskovec'),
      password: env('DATABASE_PASSWORD', 'xpRuB6u9vU@Uc4b9g8phU$8PQ@a86a3w'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
