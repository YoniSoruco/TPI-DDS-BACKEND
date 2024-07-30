import sequelize from "../data/database.js";
import { DataTypes, where } from "sequelize";

const Calificacion = sequelize.define(
  "Calificacion",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true, allowNull: false
    },
    id_examen: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_calificacion: { type: DataTypes.DATEONLY },
    calificacion: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0, // Valor mínimo permitido
        max: 10, // Valor máximo permitido
      },
    },
    activo:{type:DataTypes.INTEGER,
      defaultValue: 1, // Valor predeterminado de 1
      allowNull: false,}
  },
  {
    sequelize,
    timestamps: false,tableName:"calificacion"
  }
);

export default Calificacion;
