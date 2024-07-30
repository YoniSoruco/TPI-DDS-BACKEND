import sequelize from "../data/database.js";
import { DataTypes } from "sequelize"

const Estudiante = sequelize.define("Estudiante", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true
        , primaryKey: true
    },
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    fecha_nacimiento: { type: DataTypes.DATEONLY },
    email: { type: DataTypes.STRING(100) },
    telefono: { type: DataTypes.STRING(15) },
    activo: {
        type: DataTypes.INTEGER,
        defaultValue: 1, // Valor predeterminado de 1
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'estudiante',
    timestamps: false
})

export default Estudiante
