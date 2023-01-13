'use strict';
const responseHttp = require('../helpers/response');
const { 
  getPerfiles: getEmpleadosController,
  createPerfil: createPerfilController,
  updatePerfil: updatePerfilController,
  deletePerfil: deletePerfilController,
  getDetailPerfil: getDetailPerfilController
} = require('../../application/controllers/perfiles-controller.js');

module.exports.getPerfiles = async (event) => {
  const response = await getEmpleadosController();
  return responseHttp(response.success, response.data, response.message, response.statusCode);
};

module.exports.createPerfil = async (event) => {
  const response = await createPerfilController(JSON.parse(event.body));
  return responseHttp(response.success, response.data, response.message, response.statusCode);
};

module.exports.updatePerfil = async (event) => {
  const response = await updatePerfilController(JSON.parse(event.body), event.pathParameters.id);
  return responseHttp(response.success, response.data, response.message, response.statusCode);
};

module.exports.deletePerfil = async (event) => {
  const response = await deletePerfilController(event.pathParameters.id);
  return responseHttp(response.success, response.data, response.message, response.statusCode);
};

module.exports.getDetailPerfil = async (event) => {
  const response = await getDetailPerfilController(event.pathParameters.id);
  return responseHttp(response.success, response.data, response.message, response.statusCode);
};
