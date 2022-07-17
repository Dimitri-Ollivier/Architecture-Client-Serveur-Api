const getWeapons = "SELECT * FROM armes";
const getWeaponById = "SELECT * FROM armes WHERE id = $1";
const addWeapon = "INSERT INTO armes (name, Weapon) VALUES ($1, $2)";
const updateWeapon = "UPDATE armes SET name = $1 WHERE id = $2";
const deleteWeapon = "DELETE FROM armes WHERE id = $1";

module.exports = {
    getWeapons,
    getWeaponById,
    addWeapon,
    updateWeapon,
    deleteWeapon,
};