const InscricaoModel = require("../models/InscricaoModel");

function store(req, res) {
    const { eventoId, participanteId } = req.body;
    const resultado = InscricaoModel.criar(parseInt(eventoId), parseInt(participanteId));
    if (resultado.erro) return res.status(400).json(resultado);
    res.status(201).json(resultado);
}

function index(req, res) {
    res.json(InscricaoModel.listarTodas());
}

function listarPorEvento(req, res) {
    res.json(InscricaoModel.listarPorEvento(parseInt(req.params.eventoId)));
}

function cancelar(req, res) {
    const inscricao = InscricaoModel.cancelar(parseInt(req.params.id));
    if (!inscricao) return res.status(404).json({ erro: "Inscrição não encontrada" });
    res.json(inscricao);
}

module.exports = { store, index, listarPorEvento, cancelar };