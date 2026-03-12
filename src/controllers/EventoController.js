// src/controllers/EventoController.js
const EventoModel = require("../models/EventoModel");

// GET /eventos - listar todos
function index(req, res) {
    const eventos = EventoModel.listarTodos();
    res.json(eventos);
}

// GET /eventos/:id - buscar por ID
function show(req, res) {
    const id = parseInt(req.params.id);
    const evento = EventoModel.buscarPorId(id);
    if (!evento) {
        return res.status(404).json({ erro: "Evento não encontrado" });
    }
    res.json(evento);
}

// POST /eventos - criar novo
function store(req, res) {
    const { nome, descricao, data, local, capacidade } = req.body;

    // --- VALIDAÇÕES MELHORADAS ---

    // 1. Validação de Nome (Não pode ser vazio ou só espaços)
    if (!nome || nome.trim() === "") {
        return res.status(400).json({ erro: "O nome é obrigatório e não pode conter apenas espaços." });
    }

    // Validação de Data (Obrigatória)
    if (!data) {
        return res.status(400).json({ erro: "A data é obrigatória." });
    }

    // 2. Validação de Capacidade (Se informada, deve ser número positivo)
    if (capacidade !== undefined) {
        if (typeof capacidade !== 'number' || capacidade <= 0) {
            return res.status(400).json({ erro: "A capacidade deve ser um número positivo." });
        }
    }

    // Se passou por tudo, cria o evento
    const novoEvento = EventoModel.criar({
        nome: nome.trim(), // Salvamos já sem os espaços inúteis
        descricao,
        data,
        local,
        capacidade,
    });

    res.status(201).json(novoEvento);
}

// PUT /eventos/:id - atualizar
function update(req, res) {
    const id = parseInt(req.params.id);
    
    // Opcional: Você pode aplicar as mesmas validações acima aqui se desejar!
    const eventoAtualizado = EventoModel.atualizar(id, req.body);
    
    if (!eventoAtualizado) {
        return res.status(404).json({ erro: "Evento não encontrado" });
    }
    res.json(eventoAtualizado);
}

function destroy(req, res) { // ou o nome que você escolheu
  // ... lógica de deletar
}

module.exports = { 
  index, 
  show, 
  store, 
  update, 
  destroy // <--- ELA PRECISA ESTAR AQUI!
};

module.exports = { index, show, store, update, destroy };