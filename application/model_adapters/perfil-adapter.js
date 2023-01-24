const perfilQuery = require('../../infraestructure/repositories/perfiles-query');
const perfilDto = require('../helpers/perfil-dto');

const findPerfiles = async () => {
    const data = await perfilQuery.findPerfiles();
    return perfilDto.getPerfilesFromDBArray(data);
}

const findOnePerfil = async (id) => {
    const perf = await perfilQuery.findOnePerfil(id);
    return perfilDto.getDBFromPerfilDto(perf);
}

const createPerfil = async ({
    nombrePerfil,
    estado
}) => {
    return await perfilQuery.createPerfil(
        {
            nombrePerfil,
            estado
        }
    );
}

const updatePerfil = async ({
    nombrePerfil,
    estado
}, idPerfiles) => {
    return await perfilQuery.updatePerfil({
        nombrePerfil,
        estado
    }, idPerfiles)
}

const deletePerfil = async (idPerfiles) => {
    return await perfilQuery.deletePerfil(idPerfiles);
}

module.exports = {
    findPerfiles,
    findOnePerfil,
    createPerfil,
    updatePerfil,
    deletePerfil,
}