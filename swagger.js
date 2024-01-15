import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Luna',
      version: '1.0.0',
      description: 'Proyecto de prueba en node',
    },
    components: {
      schemas: {
        categoriaArticulo: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            nombre: { type: 'string' },
            descripcion: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          },
        },
      },
    },
    servers: [
        {
          url: 'http://localhost:5001/api',
        },
      ],
  },
  apis: ['./src/routes/*.js'], // Rutas donde se encuentran tus definiciones JSDoc
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };