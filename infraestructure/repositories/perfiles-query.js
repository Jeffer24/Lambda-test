const { db } = require("./connections");
const TableName = "Perfiles";

const findPerfiles = async () => {
  return db.select().table(TableName);
};

const findOnePerfil = async (id) => {
  //return db.select().table(TableName).innerJoin(TableName, estudios.id, games.id)
  return db.select().table(TableName).where("idPerfiles", id).first();
};
const createPerfil = async ({ nombrePerfil, estado, tipoCobertura }) => {
  return await db(TableName).insert({
    nombrePerfil,
    estado,
    tipoCobertura,
  });
};
const updatePerfil = async ({ nombrePerfil, estado, tipoCobertura }, id) => {
  return await db(TableName).where("idPerfiles", id).update({
    nombrePerfil: nombrePerfil,
    estado: estado,
    tipoCobertura: tipoCobertura,
  });
};

const deletePerfil = async (id) => {
  return await db(TableName).where("idPerfiles", id).del();
};

module.exports = {
  findPerfiles,
  findOnePerfil,
  createPerfil,
  updatePerfil,
  deletePerfil,
};
