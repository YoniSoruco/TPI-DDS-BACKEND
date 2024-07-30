import sequelize from "../data/database.js";
import { DataTypes } from "sequelize";


const Profesor = sequelize.define(
  "Profesor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
     
    },
    apellido: {
      type: DataTypes.STRING(100),
     
    },
    fecha_contratacion: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salario: {
      type: DataTypes.DECIMAL(10, 2),
      
    },
    telefono: {
      type: DataTypes.STRING(15),
      
    },
    activo:{type:DataTypes.INTEGER,
      defaultValue: 1, // Valor predeterminado de 1
      allowNull: false,}
  },
  {
    sequelize,
    tableName:'profesor',
    timestamps: false,
  }
);

export default Profesor;