const express = require('express');
const pictureRoutes = require('./src/routes/weapon');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
})

app.use("/api/v1/pictures", pictureRoutes);

app.listen(port, () => console.log(`serveur en cours d\'exécution sur le port ${port}`));