import sequelize from "./data/database.js";
import express from "express";
import cors from "cors";
import departamentoRoutes from "./routes/departamento.js";
import inscripcionRoutes from "./routes/inscripcion.js";
import examenRoutes from "./routes/examen.js";
import calificaiconRoutes from "./routes/calificacion.js";
import becaRoutes from "./routes/becas.js";
import estudianteRoutes from "./routes/estudiantes.js";
import { initializeData } from "./data/initializeData.js";
import becasRoutes from "./routes/estudianteBecas.js";
import cursosRoutes from "./routes/cursos.js";
import asignacionRoutes from "./routes/asignacion.js";
import profesorRoutes from "./routes/profesor.js";


const PORT = process.env.PORT || 3000;
const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(cors())

// Rutas
app.use('/departamentos', departamentoRoutes);
app.use('/inscripciones', inscripcionRoutes);
app.use('/examenes', examenRoutes);
app.use('/calificaciones', calificaiconRoutes);
app.use('/becas', becaRoutes);
app.use('/estudiantes', estudianteRoutes);
app.use('/cursos', cursosRoutes);
app.use('/estudiantesbecados', becasRoutes);
app.use("/asignaciones", asignacionRoutes);
app.use("/profesores", profesorRoutes);
// Sincronizando bdd
sequelize.sync({ force: true })
  .then(async() => {
    console.log("Base de datos sincronizada");
    await initializeData();
    // Inicia el servidor después de que la base de datos se haya sincronizado correctamente
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("Error sincronizando la base de datos:", err);
  });
