const perfilAdapter = require('../../application/model_adapters/perfil-adapter');

const getPerfiles = async () => {
    return perfilAdapter.findPerfiles();
}
const createPerfil = async (perfilData) => {
    return perfilAdapter.createPerfil(perfilData);
}
const updatePerfil = async (perfilData, id) => {
    return perfilAdapter.updatePerfil(perfilData, id);
}
const deletePerfil = async (id) => {
    return perfilAdapter.deletePerfil(id);
}
const getDetailPerfil = async (id) => {
    return perfilAdapter.findOnePerfil(id);
}

module.exports = {
    getPerfiles,
    createPerfil,
    updatePerfil,
    deletePerfil,
    getDetailPerfil,
}