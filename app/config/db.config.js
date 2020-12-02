// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "",
//   DB: "payment",
//   dialect: "mysql",
//   pool: {
//     max: 5, // maximum number of connection in pool
//     min: 0, // minimum number of connection in pool
//     acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
//     idle: 10000, // maximum time, in milliseconds, that a connection can be idle before being released
//   },
// };
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "admin",
  PORT: 5432,
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
