import sequelize from "../data/database.js";
import { DataTypes } from "sequelize"

const Curso = sequelize.define("Curso", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true
        , primaryKey: true
    },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    fecha_inicio: { type: DataTypes.DATEONLY },
    fecha_fin: { type: DataTypes.DATEONLY },
    activo: {
        type: DataTypes.INTEGER,
        defaultValue: 1, // Valor predeterminado de 1
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'curso',
    timestamps: false
})

export default Curso