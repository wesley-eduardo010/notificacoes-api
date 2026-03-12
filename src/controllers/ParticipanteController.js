const ParticipanteModel = require("../models/ParticipanteModel");

function index(req, res) { res.json(ParticipanteModel.listarTodos()); }

function show(req, res) {
  const participante = ParticipanteModel.buscarPorId(parseInt(req.params.id));
  if (!participante) return res.status(404).json({ erro: "Participante não encontrado" });
  res.json(participante);
}

function store(req, res) {
  const { nome, email } = req.body;
  if (!nome || !email) return res.status(400).json({ erro: "Nome e email são obrigatórios" });
  res.status(201).json(ParticipanteModel.criar({ nome, email }));
}

function update(req, res) {
  const participante = ParticipanteModel.atualizar(parseInt(req.params.id), req.body);
  if (!participante) return res.status(404).json({ erro: "Participante não encontrado" });
  res.json(participante);
}

function destroy(req, res) {
  if (!ParticipanteModel.deletar(parseInt(req.params.id))) return res.status(404).json({ erro: "Participante não encontrado" });
  res.status(204).send();
}

module.exports = { index, show, store, update, destroy };