import express from 'express';
import categoriaArticuloController from '../controllers/categoriaArticuloController.js'

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: categoriaArticulo
 *   description: The categoriaArticulo managing API
 * /categoriaArticulo:
 *   get:
 *     summary: Lists all the categoriaArticulo
 *     tags: [categoriaArticulo]
 *     responses:
 *       200:
 *         description: The list of the categoriaArticulo
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/categoriaArticulo'
 *   post:
 *     summary: Create a new categoriaArticulo
 *     tags: [categoriaArticulo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/categoriaArticulo'
 *     responses:
 *       200:
 *         description: The created categoriaArticulo.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/categoriaArticulo'
 *       500:
 *         description: Some server error
 * /categoriaArticulo/{id}:
 *   get:
 *     summary: Get the categoriaArticulo by id
 *     tags: [categoriaArticulo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The categoriaArticulo id
 *     responses:
 *       200:
 *         description: The categoriaArticulo response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/categoriaArticulo'
 *       404:
 *         description: The categoriaArticulo was not found
 *   put:
 *    summary: Update the categoriaArticulo by the id
 *    tags: [categoriaArticulo]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The categoriaArticulo id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/categoriaArticulo'
 *    responses:
 *      200:
 *        description: The categoriaArticulo was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/categoriaArticulo'
 *      404:
 *        description: The categoriaArticulo was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the categoriaArticulo by id
 *     tags: [categoriaArticulo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The categoriaArticulo id
 *
 *     responses:
 *       200:
 *         description: The categoriaArticulo was deleted
 *       404:
 *         description: The categoriaArticulo was not found
 */

router.get('/categoriaArticulo', categoriaArticuloController.getAll);
router.get('/categoriaArticulo/:id', categoriaArticuloController.getById);
router.post('/categoriaArticulo', categoriaArticuloController.create);
router.put('/categoriaArticulo/:id', categoriaArticuloController.update);
router.delete('/categoriaArticulo/:id', categoriaArticuloController.remove);

export default router;