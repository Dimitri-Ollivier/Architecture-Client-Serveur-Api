const express = require('express');
const weaponRoutes = require('./src/routes/weapon');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

app.use("/", weaponRoutes);

app.use(express.json());

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Api GetReady",
            description: "Api information for the website GetReady",
            contact: {
                name: "Epsi"
            },
            servers: ["http://localhost:3000"]
        }
    },
    // ['.routes/*.js']
    apis: ["server.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /weapons:
 *  get:
 *    description: Use to request all weapons
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/weapons", (req, res) => {
    res.status(200).send("Weapons result");
});

/**
 * @swagger
 * /weapons/{id}:
 *  get:
 *    description: Use to request a weapon by his id
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *    responses:
 *      200:
 *        description: success
 *      404:
 *        description: Not found
 *      500:
 *        description: Internal Server error
 */
app.get("/weapons/:id", (req, res) => {
    res.status(200).send("Weapons result");
});


app.listen(port, () => console.log(`serveur en cours d\'exécution sur le port ${port}`));