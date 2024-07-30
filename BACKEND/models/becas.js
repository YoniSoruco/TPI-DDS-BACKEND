import sequelize from "../data/database.js";
import { DataTypes } from "sequelize"

const Beca = sequelize.define("Beca", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true
        , primaryKey: true, allowNull: false
    },
    nombre: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    monto: { type: DataTypes.DECIMAL(10, 2) },
    fecha_inicio: { type: DataTypes.DATEONLY },
    fecha_fin: { type: DataTypes.DATEONLY },
    activo: {
        type: DataTypes.INTEGER, 
        defaultValue: 1, // valor por defecto
        allowNull: false,
    }
}, {
    sequelize,
    tableName: "beca",
    timestamps: false
})

export default Beca
