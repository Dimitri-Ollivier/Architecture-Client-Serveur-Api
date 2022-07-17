const pool = require("../../db");
const queries = require('../queries/weapon');

const getWeapons = (req, res) => {
    pool.query(queries.getWeapons, (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
    });
};

const getWeaponById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getWeaponById, [id], (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
    });
};

const addWeapon = (req, res) => {
    const { name, Weapon } = req.body;

    pool.query(queries.addWeapon, [name, Weapon], (error, results) => {
        if (error) throw error;
        res.status(201).send("Student Created Successfully!");
    });
};

const updateWeapon = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    pool.query(queries.getWeaponById, [id], (error, results) => {
        if (error) throw error;
        const noWeaponsFound = !results.rows.length;
        if (noWeaponsFound) {
            res.send("Weapons does not exist in the database.");
        }

        pool.query(queries.updateWeapon, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student Deleted Successfully!");
        });
    });
};

const deleteWeapon = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getWeaponById, [id], (error, results) => {
        if (error) throw error;
        const noWeaponsFound = !results.rows.length;
        if (noWeaponsFound) {
            res.send("Weapons does not exist in the database.");
        }

        pool.query(queries.deleteWeapon, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student Deleted Successfully!");
        });
    });
};

module.exports = {
    getWeapons,
    getWeaponById,
    addWeapon,
    updateWeapon,
    deleteWeapon,
};