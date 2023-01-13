const perfilQuery = require('../../infraestructure/repositories/perfiles-query');
const perfilDto = require('../helpers/perfil-dto');

const findPerfiles = async () => {
    const data = await perfilQuery.findPerfiles();
    return perfilDto.getPerfilesFromDBArray(data);
}

const findOnePerfil = async (id) => {

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
    nombrePerfil
}, idPerfiles) => {

}

const deletePerfil = async (idPerfiles) => {

}

module.exports = {
    findPerfiles,
    findOnePerfil,
    createPerfil,
    updatePerfil,
    deletePerfil,
}