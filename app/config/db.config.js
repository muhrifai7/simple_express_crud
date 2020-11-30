// module.exports = {
//   /*
//    * First five parameters are for MySQL connection.
//    */
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

// module.exports = {
//   /*
//    * First five parameters are for MySQL connection.
//    */
//   HOST: "ec2-34-204-121-199.compute-1.amazonaws.com",
//   USER: "ozcvvcabedtkrz",
//   PASSWORD: "cd2648cd0f73083c3a649a47b21c97b14c56c67aae03bc07aa6059aeb8eb403e",
//   DB: "dc5b0cklvojpur",
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
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// INSERT INTO posts (title, subtitle, content, published)
// VALUES ('Raju', 'Kumar', '1996-12-02', true)

// CREATE TABLE posts(
//       id SERIAL PRIMARY KEY,
//     title VARCHAR (500),
//     subtitle VARCHAR (1200),
// 	description varchar(10000),
// 	published BOOLEAN NOT NULL
// );
