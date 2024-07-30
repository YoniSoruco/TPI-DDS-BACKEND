import sequelize from "../data/database.js";
import { DataTypes } from "sequelize";

const Asignacion = sequelize.define(
  "Asignacion",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, allowNull: false
    },
    id_profesor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_asignacion: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    }, activo: {
      type: DataTypes.INTEGER,
      defaultValue: 1, 
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "asignacion",
    timestamps: false,
  }
);

export default Asignacion;