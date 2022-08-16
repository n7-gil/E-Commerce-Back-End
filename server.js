const express = require("express");
const routes = require("./routes");
const mysql = require("mysql2");
// import sequelize connection
const sequelize = require("sequelize");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce_db",
  },
  console.log(`Connected to the ecommerce_db.`)
);

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
