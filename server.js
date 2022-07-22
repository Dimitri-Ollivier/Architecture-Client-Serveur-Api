const express = require('express');
const mongoose = require('mongoose');
const weaponRoutes = require('./src/routes/weapon');
const weaponPictureRoutes = require('./src/routes/weaponPicture');
const accessoryRoutes = require('./src/routes/accessory');
const accessoryPictureRoutes = require('./src/routes/accessoryPicture');
const shoppingCartRoutes = require('./src/routes/shoppingCart');
const userRoutes = require('./src/routes/user');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 8080;
const mongoUri = "mongodb+srv://dimitrioll:Dimi1405@cluster0.x4sro.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
        console.log("connected to mongoDB")
    }).catch(err => console.log(err.message));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use("/weapons", weaponRoutes);
app.use("/weaponPictures", weaponPictureRoutes);
app.use("/accessories", accessoryRoutes);
app.use("/accessoryPictures", accessoryPictureRoutes);
app.use("/shoppingCarts", shoppingCartRoutes);
app.use("/users", userRoutes);

app.listen(port, () => console.log(`Server litsen on port ${port}`));

// SWAGGER
// // Extended: https://swagger.io/specification/#infoObject
// const swaggerOptions = {
//     swaggerDefinition: {
//         info: {
//             version: "1.0.0",
//             title: "Api GetReady",
//             description: "Api information for the website GetReady",
//             contact: {
//                 name: "Epsi"
//             },
//             servers: ["http://localhost:3000"]
//         }
//     },
//     // ['.routes/*.js']
//     apis: ["server.js"]
// };
//
// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//
// /**
//  * @swagger
//  * /weapons:
//  *  get:
//  *    description: Use to request all weapons
//  *    responses:
//  *      200:
//  *        description: success
//  *      404:
//  *        description: Not found
//  *      500:
//  *        description: Internal Server error
//  */
// app.get("/weapons", (req, res) => {
//     res.status(200).send("Weapons result");
// });
//
// /**
//  * @swagger
//  * /weapons/{id}:
//  *  get:
//  *    description: Use to request a weapon by his id
//  *    parameters:
//  *      - name: id
//  *        in: path
//  *        required: true
//  *    responses:
//  *      200:
//  *        description: success
//  *      404:
//  *        description: Not found
//  *      500:
//  *        description: Internal Server error
//  */
// app.get("/weapons/:id", (req, res) => {
//     res.status(200).send("Weapons result");
// });
