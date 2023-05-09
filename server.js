const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require("./config/cnnection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// imports in the models
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {                      // once tables are completed, set force to false
  app.listen(PORT, () => console.log("Now listening"));
});
