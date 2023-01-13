const { db } = require('./connections');
const TableName = 'Perfiles';

const findPerfiles = async () => {
    return db.select().table(TableName);
}

const findOnePerfil = async (id) => {
    //return db.select().table(TableName).innerJoin(TableName, estudios.id, games.id)
    return db.select().table(TableName).where('id', id).first();
}
const createPerfil = async ({
    nombrePerfil,
    estado
}) => {
    
    return await db(TableName).insert({
        nombrePerfil,
        estado
    });
}
const updatePerfil = async ({
    nombrePerfil,
    estado
}, id) => {

}
const deletePerfil = async (id) => {

}

module.exports = {
    findPerfiles,
    findOnePerfil,
    createPerfil,
    updatePerfil,
    deletePerfil,
}
