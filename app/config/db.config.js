module.exports = {
  /*
   * First five parameters are for MySQL connection.
   */
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "payment",
  dialect: "mysql",
  pool: {
    max: 5, // maximum number of connection in pool
    min: 0, // minimum number of connection in pool
    acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000, // maximum time, in milliseconds, that a connection can be idle before being released
  },
};

// module.exports = {
//   /*
//    * First five parameters are for MySQL connection.
//    */
//   HOST: "ec2-52-20-160-44.compute-1.amazonaws.com",
//   USER: "pmaynblmpshtri",
//   PASSWORD: "b33b0dcf4614261fa0da5ea95720c4c7f9ccb357d9612e28fec9f2b1a099a494",
//   DB: "ddv5e70ivd6o59",
//   dialect: "postgres",
//   pool: {
//     max: 5, // maximum number of connection in pool
//     min: 0, // minimum number of connection in pool
//     acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
//     idle: 10000, // maximum time, in milliseconds, that a connection can be idle before being released
//   },
// };
