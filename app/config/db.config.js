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
  HOST: "ec2-52-44-235-121.compute-1.amazonaws.com",
  USER: "dmlahgidtrhrrb",
  PASSWORD: "7dfbbfe907205fa30990187bae3745c6f5ddb6b44ebe429cac91c235f5506cad",
  PORT: 5432,
  DB: "d1pge4vlmvidek",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
