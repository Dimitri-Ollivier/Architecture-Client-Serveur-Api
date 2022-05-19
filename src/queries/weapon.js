const getPictures = "SELECT * FROM pictures";
const getPictureById = "SELECT * FROM pictures WHERE id = $1";
const addPicture = "INSERT INTO pictures (name, picture) VALUES ($1, $2)";
const updatePicture = "UPDATE pictures SET name = $1 WHERE id = $2";
const deletePicture = "DELETE FROM pictures WHERE id = $1";

module.exports = {
    getPictures,
    getPictureById,
    addPicture,
    updatePicture,
    deletePicture,
};