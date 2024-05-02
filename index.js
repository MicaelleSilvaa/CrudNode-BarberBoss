const express = require("express");
const mongoose = require("mongoose");
const Cliente = require("./models/cliente-models.js");
const clienteRoute = require("./routes/cliente-route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/cliente", clienteRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    "mongodb+srv://clienteBarber:VZ20l11GEJfvwcv9@micaelle-silva.cp0nfjb.mongodb.net/"
  )
  .then(() => {
    console.log("Conectado com o banco de dados!");
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });