import sequelize from "../data/database.js";
import { DataTypes } from "sequelize";

const Inscripcion = sequelize.define('Inscripcion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_estudiante: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_curso: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_inscripcion: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING
    }, 
    activo: {
        type: DataTypes.INTEGER,
        defaultValue: 1, // Valor predeterminado de 1
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'inscripcion',
    timestamps: false
});

export default Inscripcion;