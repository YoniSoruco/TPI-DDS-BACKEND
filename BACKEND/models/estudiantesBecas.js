import sequelize from "../data/database.js";
import { DataTypes } from "sequelize"

const EstudianteBeca = sequelize.define("estudianteBeca", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    id_estudiante: {
        type: DataTypes.INTEGER,

        allowNull: false
    },
    id_beca: {
        type: DataTypes.INTEGER,

        allowNull: false
    },
    fecha_asignacion: {
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
    tableName: 'estudiante_beca',
    timestamps: false
})

export default EstudianteBeca