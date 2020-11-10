const express = require("express");
const socket = require("socket.io");

const bodyParser = require("body-parser");
const cors = require("cors");

// Models
const db = require("./app/models");

const app = express();

let whiteList = ["http://localhost:8081"];
let corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to IDStack REST API." });
});

// Posts Routes
require("./app/routes/post.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const io = socket(server);

io.on("connection", function (socket) {
  console.log("Made socket connection");
  socket.on("new user", function (data) {
    socket.userId = data;
    activeUsers.add(data);
    io.emit("new user", [...activeUsers]);
  });

  socket.on("disconnect", () => {
    activeUsers.delete(socket.userId);
    io.emit("user disconnected", socket.userId);
  });

  socket.on("chat message", function (data) {
    io.emit("chat message", data);
  });

  socket.on("typing", function (data) {
    socket.broadcast.emit("typing", data);
  });
});
