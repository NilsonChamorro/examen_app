const themePropiertiesController = require("../../controller/themes_propierties/themes_propierties.controller");

module.exports = function (app) {
    app.get("/themes_propierties/listar", themePropiertiesController.listar);
    app.get("/themes_propierties/:id", themePropiertiesController.buscarPorCodigo);
    app.post("/themes_propierties/update", themePropiertiesController.actualizar);
    app.delete("/themes_propierties/delete/:id", themePropiertiesController.eliminar);
};