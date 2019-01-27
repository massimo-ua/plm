module.exports = {
  database: 'plm',
  username: 'plm',
  password: 'plm',
  host: 'postgres',
  port: '5432',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
