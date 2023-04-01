const { sequelize } = require("../../connection");
const { ThemeModel } = require("../../model/themes_propierties.model");
const ThemesPropiertiesService = require("../../service/themes_propierties.service");

const listar = async function (req, res) {
    console.log("listar temas propiedades");
    try {
        const themes_propierties = await ThemesPropiertiesService.listar(req.query.filtro || '');
        console.log("themes_propierties", themes_propierties);
        if (themes_propierties) {
            res.json({
                succes: true,
                temas_propiedades: themes_propierties
            });
        } else {
            res.json({
                succes: true,
                temas_propiedades: []
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            succes: false,
            error: error.message
        });
    }
};

const buscarPorCodigo = async function (req, res) {
    console.log("consultar temas propiedades");
    try {
        const themePropiertiesModelResult = await ThemesPropiertiesService.buscarPorCodigo(req.params.id);
        if (themePropiertiesModelResult) {
            res.json({
                succes: true,
                temas_propiedades: themePropiertiesModelResult
            });
        } else {
            res.json({
                succes: true,
                temas_propiedades: null
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            succes: false,
            error: error.message
        });
    }
};

const actualizar = async function (req, res) {
    console.log("actualizar temas propiedades");
    let temaPropiedadesRetorno = null;

    try {
        temaPropiedadesRetorno = await ThemesPropiertiesService.actualizar(req.body.id, req.body.create_date, req.body.name,
            req.body.description, req.body.keywords,
            req.body.owner_user_id);
        res.json({
            succes: true,
            tema: temaPropiedadesRetorno
        });
    } catch (error) {
        console.log(error);
        res.json({
            succes: false,
            error: error.messages
        });
    }
};

const eliminar = async function (req, res) {
    console.log("eliminar temas propiedades");

    try {
        //ThemeModel.destroy(req.params.id);
        const themes_propierties = await ThemesPropiertiesService.eliminar(req.params.id);
        console.log("temas propiedades eliminado");
        res.json({
            succes: true
        });
    } catch (error) {
        console.log(error);
        res.json({
            succes: false,
            error: error.message
        });
    }
};

module.exports = {
    listar, buscarPorCodigo, actualizar, eliminar
};