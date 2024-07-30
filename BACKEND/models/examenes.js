import sequelize from "../data/database.js";
import { DataTypes } from "sequelize";

const Examen = sequelize.define(
  "Examen",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_curso: { type: DataTypes.INTEGER, allowNull: false },
    descripcion: { type: DataTypes.STRING },
    fecha_examen: {type:DataTypes.DATEONLY},
    duracion: { type: DataTypes.INTEGER },
    activo:{type:DataTypes.INTEGER,
      defaultValue: 1, // Valor predeterminado de 1
      allowNull: false,}
  },
  {
    sequelize,
    timestamps: false, tableName: "examen"
  }
);

export default Examen;
