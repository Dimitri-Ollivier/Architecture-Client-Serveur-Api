const pool = require("../../db");
const queries = require('../queries/weapon');

const getPictures = (req, res) => {
    pool.query(queries.getPictures, (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
    });
};

const getPictureById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getPictureById, [id], (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
    });
};

const addPicture = (req, res) => {
    const { name, picture } = req.body;

    pool.query(queries.addPicture, [name, picture], (error, results) => {
        if (error) throw error;
        res.status(201).send("Student Created Successfully!");
    });
};

const updatePicture = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    pool.query(queries.getPictureById, [id], (error, results) => {
        if (error) throw error;
        const noPicturesFound = !results.rows.length;
        if (noPicturesFound) {
            res.send("Pictures does not exist in the database.");
        }

        pool.query(queries.updatePicture, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student Deleted Successfully!");
        });
    });
};

const deletePicture = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPictureById, [id], (error, results) => {
        if (error) throw error;
        const noPicturesFound = !results.rows.length;
        if (noPicturesFound) {
            res.send("Pictures does not exist in the database.");
        }

        pool.query(queries.deletePicture, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student Deleted Successfully!");
        });
    });
};

module.exports = {
    getPictures,
    getPictureById,
    addPicture,
    updatePicture,
    deletePicture,
};