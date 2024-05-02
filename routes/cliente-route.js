const express = require("express");
const Cliente = require("../models/cliente-models.js");
const router = express.Router();
const { getClientes, getCliente, createCliente, updateCliente, deleteCliente } = require('../controllers/cliente-controller.js');

router.get('/', getClientes);
router.get("/:id", getCliente);

router.post("/", createCliente);

// update a client
router.put("/:id", updateCliente);

// delete a client
router.delete("/:id", deleteCliente);


module.exports = router;