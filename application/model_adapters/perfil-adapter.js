const perfilQuery = require("../../infraestructure/repositories/perfiles-query");
const perfilDto = require("../helpers/perfil-dto");

const findPerfiles = async () => {
  const data = await perfilQuery.findPerfiles();
  return perfilDto.getPerfilesFromDBArray(data);
};

const findOnePerfil = async (id) => {
  const perf = await perfilQuery.findOnePerfil(id);
  if (!perf) return null;
  return perfilDto.getPerfilFromDBDto(perf);
};

const createPerfil = async ({ nombrePerfil, estado, tipoCobertura }) => {
  return await perfilQuery.createPerfil({
    nombrePerfil,
    estado,
    tipoCobertura,
  });
};

const updatePerfil = async (
  { nombrePerfil, estado, tipoCobertura },
  idPerfiles
) => {
  return await perfilQuery.updatePerfil(
    {
      nombrePerfil,
      estado,
      tipoCobertura,
    },
    idPerfiles
  );
};

const deletePerfil = async (idPerfiles) => {
  return await perfilQuery.deletePerfil(idPerfiles);
};

module.exports = {
  findPerfiles,
  findOnePerfil,
  createPerfil,
  updatePerfil,
  deletePerfil,
};
