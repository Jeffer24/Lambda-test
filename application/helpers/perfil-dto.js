const getPerfilFromDBDto = ({
  idPerfiles,
  nombrePerfil,
  tipoCobertura,
  estado,
}) => ({
  idPerfiles: idPerfiles,
  tipoCobertura: tipoCobertura,
  nombrePerfil: nombrePerfil,
  estado: estadoChange(estado),
});

const estadoChange = (estado) => {
  const uint32array = new Uint32Array(estado);
  return uint32array[0];
};

const getPerfilesFromDBArray = (perfilesDB) =>
  perfilesDB.map(getPerfilFromDBDto);

const getDBFromPerfilDto = ({ idPerfiles, nombrePerfil, estado }) => ({
  idPerfiles: idPerfiles,
  nombrePerfil: nombrePerfil,
  estado: estado,
});

module.exports = {
  getPerfilFromDBDto,
  getPerfilesFromDBArray,
  getDBFromPerfilDto,
};
