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
            message : "Perfil creado."
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
        //console.log('perfil Data updated ', perfilData, idPerfil);
        //Validamos si existe el perfil
        response = await validarExistencia(idPerfil);    
        if(response.data){
            const result = await perfilUseCase.updatePerfil(perfilData, idPerfil);
            response = responseSuccess({ 
                message : "Perfil actualizado.",
                data: result
            }, StatusCodes.OK);
        }   
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
        //console.log('perfil Data elimiar ', idPerfil);
        // Validamos si existe el perfil
        response = await validarExistencia(idPerfil);    
        if(response.data){
            await perfilUseCase.deletePerfil(idPerfil);
            response = responseSuccess({ 
                message : "Perfil eliminado."
            }, StatusCodes.OK);
        } 
       
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
        //console.log('perfil Data consultar ', idPerfil);
        response = await validarExistencia(idPerfil);     
    } catch (error){
        response = structureFail({
            message:"Error inesperado."
        });
    }
    return response;
}

const validarExistencia = async (idPerfil) => {
    let response = null;
    const result = await perfilUseCase.getDetailPerfil(idPerfil);

    if(result){
        response = responseSuccess({ 
            data: result
        }, StatusCodes.OK);
    } else {
        response = responseSuccess({ 
            data: null,
            message: "Perfil no encontrado."
        }, StatusCodes.NOT_FOUND);
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