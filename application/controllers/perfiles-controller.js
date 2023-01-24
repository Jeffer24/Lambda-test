const { responseSuccess, responseFail, structureFail } = require('../helpers/responses');
const { StatusCodes } = require('http-status-codes');
const perfilUseCase = require('../../domain/usecase/perfiles-usecase');

const getPerfiles = async () => {
    let response = null;
    try {
        const result = await perfilUseCase.getPerfiles();
        response = responseSuccess({data: result})
    } catch (error){
        response = structureFail({
            message:"Error inesperado."
        });
    }
    return response;
}

const createPerfil = async (perfilData) => {
    let response = null;
    try {
        await perfilUseCase.createPerfil(perfilData);
        response = responseSuccess({ 
            message : "Perfil creado"
        }, StatusCodes.CREATED);
    } catch (error){
        response = structureFail({
            message:"Error inesperado."
        });
    }
    return response;
}


const updatePerfil = async (perfilData, idPerfil) => {
    let response = null;
    try {
        console.log('perfil Data updated ', perfilData, idPerfil);
        await perfilUseCase.createPerfil(perfilData);
        response = responseSuccess({ 
            message : "Perfil updated"
        }, StatusCodes.OK);
    } catch (error){
        response = structureFail({
            message:"Error inesperado."
        });
    }
    return response;
}

const deletePerfil = async (idPerfil) => {
    let response = null;
    try {
        console.log('perfil Data elimiar ', idPerfil);
        await perfilUseCase.deletePerfil(idPerfil);
        response = responseSuccess({ 
            message : "Perfil eliminado"
        }, StatusCodes.OK);
    } catch (error){
        response = structureFail({
            message:"Error inesperado."
        });
    }
    return response;
}

const getDetailPerfil = async (idPerfil) => {
    let response = null;
    try {
        console.log('perfil Data consultar ', idPerfil);
        await perfilUseCase.getDetailPerfil(idPerfil);
        response = responseSuccess({ 
            data: data[0]
        }, StatusCodes.OK);
    } catch (error){
        response = structureFail({
            message:"Error inesperado."
        });
    }
    return response;
}

module.exports={
    getPerfiles,
    createPerfil,
    updatePerfil,
    deletePerfil,
    getDetailPerfil
}