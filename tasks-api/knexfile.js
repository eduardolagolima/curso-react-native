module.exports = {
  client: 'postgresql',
  connection: {
    database: 'tasks',
    user: 'tasks',
    password: 'tasks',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
