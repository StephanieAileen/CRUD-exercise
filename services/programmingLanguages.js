// Este es nuestro modelo

const db = require ('./db');
const helper = require ('../helper');
const config = require ('../config');

async function create(programmingLanguages) {

    const resultado = await db.query(`
        INSERT INTO lenguages_programacion 
        (nombre, anio_salida, github_rank)
        VALUES
        (
            "${programmingLanguages.nombre}",
            "${programmingLanguages.anio_salida}",
            "${programmingLanguages.github_rank}"
        )
    `);

    let message = "Error al crear el lenguage de programacion";
    if(resultado.affectedRows){
        message = "El lenguage se ha creado con éxito";
    }
    return {message};
}

async function read (page=1){
    const offSet = helper.getOffSet(page,config.listPerPage);
    const rows = await db.query(`
        SELECT * FROM lenguages_programacion LIMIT ${offSet}, ${config.listPerPage};
    `);

    const data = helper.emptyRows(rows);
    const metadata = {page};

    return {
        data,
        metadata
    };
}

async function update(id, programmingLanguages) {
    const resultado = await db.query(`
    UPDATE lenguajes_programacion
    SET nombre = "${programmingLanguages.nombre}", 
    anio_salida = "${programmingLanguages.anio_salida}",
    github_rank = "${programmingLanguages.github_rank}"

    WHERE id = "${id}",
    `);

    let message = "Error al actualizar el lenguage de programacion";
    if(resultado.affectedRows){
        message = "El lenguage se ha actualizado con éxito";
    }
    return {message};
};

async function eliminar (id) {
    const resultado = db.query(`
    DELETE FROM lenguajes_programacion WHERE id = "${id}",
    `);

    let message = "Error al eliminar el lenguage de programacion";
    if(resultado.affectedRows){
        message = "El lenguage se ha eliminado con éxito";
    }
    return {message};
}

module.exports = {
    create,
    read,
    update,
    eliminar 
};