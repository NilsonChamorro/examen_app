const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const ThemeModel = sequelize.define('themes_propierties', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    theme_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false
    },

    propierty_name: {
        type: DataTypes.STRING,
        allowNull: true
    },

    propierty_value: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'themes_propierties',
    timestamps: true
});

module.exports = {
    ThemeModel
};