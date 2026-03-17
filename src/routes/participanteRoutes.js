const express = require("express");
const router = express.Router();
const ParticipanteController = require("../controllers/ParticipanteController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Participante:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         email:
 *           type: string
 *       example:
 *         id: 1
 *         nome: Ana Silva
 *         email: ana@email.com
 */

/**
 * @swagger
 * /participantes:
 *   get:
 *     summary: Listar participantes
 *     tags: [Participantes]
 *     responses:
 *       200:
 *         description: Lista de participantes
 */
router.get("/", ParticipanteController.index);

/**
 * @swagger
 * /participantes/{id}:
 *   get:
 *     summary: Buscar participante por ID
 *     tags: [Participantes]
 */
router.get("/:id", ParticipanteController.show);

/**
 * @swagger
 * /participantes:
 *   post:
 *     summary: Criar participante
 *     tags: [Participantes]
 */
router.post("/", ParticipanteController.store);

/**
 * @swagger
 * /participantes/{id}:
 *   put:
 *     summary: Atualizar participante
 *     tags: [Participantes]
 */
router.put("/:id", ParticipanteController.update);

/**
 * @swagger
 * /participantes/{id}:
 *   delete:
 *     summary: Deletar participante
 *     tags: [Participantes]
 */
router.delete("/:id", ParticipanteController.destroy);

module.exports = router;