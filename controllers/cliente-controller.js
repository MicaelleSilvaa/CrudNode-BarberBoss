const Cliente = require("../models/cliente-models");

const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find({});
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findById(id);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;

    const cliente = await Cliente.findByIdAndUpdate(id, req.body);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    const updatedCliente = await Cliente.findById(id);
    res.status(200).json(updatedCliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;

    const cliente = await Cliente.findByIdAndDelete(id);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente não deletado" });
    }

    res.status(200).json({ message: "Cliente deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
};