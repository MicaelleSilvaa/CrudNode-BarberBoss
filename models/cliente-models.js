const mongoose = require("mongoose");

const ClienteSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Insira seu nome"],
    },

    contact: {
      type: Number,
      required: true,
    },

    value: {
      type: Number,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    day: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Cliente = mongoose.model("Cliente", ClienteSchema);

module.exports = Cliente;