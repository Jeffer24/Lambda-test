const perfilAdapter = require('../../application/model_adapters/perfil-adapter');

const getPerfiles = async () => {
    return perfilAdapter.findPerfiles();
}
const createPerfil = async (perfilData) => {
    return perfilAdapter.createPerfil(perfilData);
}
const updatePerfil = async (perfilData, id) => {

}
const deletePerfil = async (id) => {

}
const getDetailPerfil = async (id) => {

}

module.exports = {
    getPerfiles,
    createPerfil,
    updatePerfil,
    deletePerfil,
    getDetailPerfil,
}