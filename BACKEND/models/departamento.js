import sequelize from "../data/database.js";
import { DataTypes } from "sequelize";

const Departamento = sequelize.define("Departamento", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ubicacion: {
        type: DataTypes.STRING
    },
    fecha_alta: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    activo: {
        type: DataTypes.INTEGER,
        defaultValue: 1, // Valor predeterminado de 1
        allowNull: false,
    }

}, {
    sequelize,
    tableName: 'departamento',
    timestamps: false
});

export default Departamento;