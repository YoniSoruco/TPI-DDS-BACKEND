import Departamento from '../models/departamento.js';
import Inscripcion from '../models/inscripcion.js';
import Calificacion from "../models/calificaciones.js";
import Examen from "../models/examenes.js";
import Beca from '../models/becas.js';
import Estudiante from '../models/estudiantes.js';
import Curso from '../models/cursos.js';
import EstudianteBeca from '../models/estudiantesBecas.js';
import Profesor from '../models/profesores.js';
import Asignacion from '../models/asignaciones.js';

// Definir relaciones entre modelos
const definirRelaciones = () => {
    Profesor.belongsTo(Departamento, { foreignKey: "id_departamento" });
    Asignacion.belongsTo(Profesor, { foreignKey: "id_profesor" });
    Asignacion.belongsTo(Curso, { foreignKey: "id_curso" });
    Calificacion.belongsTo(Examen, { foreignKey: "id_examen" });
    Calificacion.belongsTo(Estudiante, { foreignKey: "id_estudiante" });
    Examen.belongsTo(Curso, { foreignKey: "id_curso" });
    Inscripcion.belongsTo(Estudiante, { foreignKey: "id_estudiante" });
    Inscripcion.belongsTo(Curso, { foreignKey: "id_curso" });
    EstudianteBeca.belongsTo(Estudiante, { foreignKey: "id_estudiante" });
    EstudianteBeca.belongsTo(Beca, { foreignKey: "id_beca" });
};

export const initializeData = async () => {

    // Definir relaciones
    definirRelaciones();

    // Crear departamentos
    const departamentosData = [
        { nombre: "Departamento de Sistemas", ubicacion: "Edificio Central", fecha_alta: "2000-01-01", activo: 1 },
        { nombre: "Departamento de Quimica", ubicacion: "Edificio Central", fecha_alta: "1998-04-25", activo: 1 },
        { nombre: "Departamento de Electronica", ubicacion: "Edificio Azul", fecha_alta: "1996-03-16", activo: 1 },
        { nombre: "Departamento de Ciencias Basicas", ubicacion: "Edificio Rojo", fecha_alta: "1997-03-15", activo: 1 },
        { nombre: "Departamento de Electricidad", ubicacion: "Edificio Celeste", fecha_alta: "1998-07-12" },
        { nombre: "Departamento de Mecanica", ubicacion: "Edificio Azul", fecha_alta: "1997-12-01", activo: 1 },
        { nombre: "Departamento de Metalurgica", ubicacion: "Edificio Rojo", fecha_alta: "2001-11-11", activo: 1 },
        { nombre: "Departamento de Civil", ubicacion: "Edificio Celeste", fecha_alta: "2000-01-29", activo: 1 },
        { nombre: "Departamento de Industrial", ubicacion: "Edificio Central", fecha_alta: "1990-01-05", activo: 1 },
        { nombre: "Departamento de Ambiental", ubicacion: "Edificio Central", fecha_alta: "2001-05-19", activo: 1 }
    ];

    // Crear inscripciones
    const inscripcionesData = [
        { id_estudiante: 1, id_curso: 2, fecha_inscripcion: "2010-01-01", descripcion: "anotado con exito", activo: 1 },
        { id_estudiante: 2, id_curso: 2, fecha_inscripcion: "2010-01-04", descripcion: "anotado con exito", activo: 1 },
        { id_estudiante: 3, id_curso: 1, fecha_inscripcion: "2013-05-05", descripcion: "anotado fuera de termino", activo: 1 },
        { id_estudiante: 4, id_curso: 5, fecha_inscripcion: "2015-08-10", descripcion: "anotado con exito", activo: 1 },
        { id_estudiante: 1, id_curso: 5, fecha_inscripcion: "2015-07-05", descripcion: "anotado con exito", activo: 1 },
        { id_estudiante: 2, id_curso: 5, fecha_inscripcion: "2015-06-06", descripcion: "falta documentacion", activo: 1 },
        { id_estudiante: 6, id_curso: 10, fecha_inscripcion: "2018-08-01", descripcion: "anotado fuera de termino", activo: 1 },
        { id_estudiante: 7, id_curso: 9, fecha_inscripcion: "2019-02-01", descripcion: "anotado con exito", activo: 1 },
        { id_estudiante: 9, id_curso: 5, fecha_inscripcion: "2015-08-01", descripcion: "falta documentacion", activo: 1 },
        { id_estudiante: 9, id_curso: 4, fecha_inscripcion: "2020-03-03", descripcion: "anotado con exito", activo: 1 },

    ];

    // Crear Examenes
    const examenesData = [
        { id_curso: 2, descripcion: "Examen 1", fecha_examen: "2024-06-01", duracion: 120, activo: 1 },
        { id_curso: 4, descripcion: "Examen 2", fecha_examen: "2024-06-02", duracion: 90, activo: 1 },
        { id_curso: 5, descripcion: "Examen 3", fecha_examen: "2024-06-03", duracion: 150, activo: 1 },
        { id_curso: 7, descripcion: "Examen 4", fecha_examen: "2024-06-04", duracion: 180, activo: 1 },
        { id_curso: 8, descripcion: "Examen 5", fecha_examen: "2024-06-05", duracion: 120, activo: 1 },
        { id_curso: 7, descripcion: "Examen 6", fecha_examen: "2024-06-06", duracion: 90, activo: 1 },
        { id_curso: 7, descripcion: "Examen 7", fecha_examen: "2024-06-07", duracion: 150, activo: 1 },
        { id_curso: 3, descripcion: "Examen 8", fecha_examen: "2024-06-08", duracion: 180, activo: 1 },
        { id_curso: 1, descripcion: "Examen 9", fecha_examen: "2024-06-09", duracion: 120, activo: 1 },
        { id_curso: 22, descripcion: "Examen 10", fecha_examen: "2024-06-10", duracion: 90, activo: 1 },
    ];

    // Crear calificaciones
    const calificacionesData = [
        { id_examen: 2, id_estudiante: 1, fecha_calificacion: "2024-06-01", calificacion: 8.5, activo: 1 },
        { id_examen: 2, id_estudiante: 2, fecha_calificacion: "2024-06-02", calificacion: 7.2, activo: 1 },
        { id_examen: 1, id_estudiante: 3, fecha_calificacion: "2024-06-03", calificacion: 9.0, activo: 1 },
        { id_examen: 3, id_estudiante: 4, fecha_calificacion: "2024-06-04", calificacion: 6.8, activo: 1 },
        { id_examen: 7, id_estudiante: 5, fecha_calificacion: "2024-06-05", calificacion: 8.0, activo: 1 },
        { id_examen: 4, id_estudiante: 6, fecha_calificacion: "2024-06-06", calificacion: 7.5, activo: 1 },
        { id_examen: 5, id_estudiante: 7, fecha_calificacion: "2024-06-07", calificacion: 9.5, activo: 1 },
        { id_examen: 5, id_estudiante: 8, fecha_calificacion: "2024-06-08", calificacion: 6.0, activo: 1 },
        { id_examen: 6, id_estudiante: 9, fecha_calificacion: "2024-06-09", calificacion: 8.2, activo: 1 },
        { id_examen: 8, id_estudiante: 10, fecha_calificacion: "2024-06-10", calificacion: 7.7, activo: 1 },
    ];

    //Crear becas
    const becasData = [
        { nombre: "Beca Bicentenario", descripcion: "Estas becas fomentan la educación en carreras de ciencias aplicadas, naturales, exactas y tecnológicas       ", monto: "$ 45.000", fecha_inicio: "2024-03-15", fecha_fin: "2025-04-10", activo: 1 },
        { nombre: "Beca del Consejo Interuniversitario", descripcion: "Becas para promover la investigación y la movilidad estudiantil entre universidades nacionales               ", monto: "$ 50.000", fecha_inicio: "2024-04-10", fecha_fin: "2025-04-11", activo: 1 },
        { nombre: "Beca Progresar                     ", descripcion: "Becas del gobierno  destinadas a jóvenes de entre 18 y 24 años que deseen completar sus estudios             ", monto: "$ 35.000", fecha_inicio: "2024-06-16", fecha_fin: "2025-04-15", activo: 1 },
        { nombre: "Beca Sarmiento                     ", descripcion: "Estas becas fomentan la educación en carreras de ciencias aplicadas, naturales, exactas y tecnológicas       ", monto: "$ 60.000", fecha_inicio: "2024-04-10", fecha_fin: "2025-06-06", activo: 1 },
        { nombre: "Beca de la Fundación               ", descripcion: "Estas becas están dirigidas a estudiantes latinoamericanos que desean realizar estudios de posgrado en España", monto: "$ 55.000", fecha_inicio: "2024-09-11", fecha_fin: "2025-07-20", activo: 1 },
        { nombre: "Beca Manuel Belgrano               ", descripcion: "Beca  dirigida a estudiantes de carreras estratégicas para el desarrollo económico y social del país         ", monto: "$ 45.000", fecha_inicio: "2024-03-03", fecha_fin: "2025-06-11", activo: 1 },
        { nombre: "Beca del Ministerio de Educación   ", descripcion: "Becas apoyan a estudiantes de todos los niveles educativos, desde el nivel inicial hasta el universitario    ", monto: "$ 70.000", fecha_inicio: "2024-01-05", fecha_fin: "2025-04-15", activo: 1 },
        { nombre: "Beca del CONICET                   ", descripcion: "CONICET ofrece becas para estudiantes de posgrado que deseen dedicarse a la investigación científica         ", monto: "$ 75.000", fecha_inicio: "2024-01-28", fecha_fin: "2025-01-10", activo: 1 },
        { nombre: "Beca YPF                           ", descripcion: "Becas a estudiantes universitarios en áreas vinculadas a la energía, el medio ambiente y la ingeniería       ", monto: "$ 75.000", fecha_inicio: "2024-02-10", fecha_fin: "2025-02-10", activo: 1 },
        { nombre: "Becas de la Universidad Nacional   ", descripcion: "Becas para estudiantes de grado y posgrado, que incluyen apoyo para intercambios internacionales             ", monto: "$ 40.000", fecha_inicio: "2024-08-07", fecha_fin: "2025-03-10", activo: 1 },
    ];



    // Crear estudiantes
    const estudiantesData = [
        { id_estudiante: 0, nombre: "Lucas", apellido: "Aguirre", fecha_nacimiento: "2003-12-05", email: "lucasa@gmail.com", telefono: "3516764898", activo: 1 },
        { id_estudiante: 1, nombre: "Juan", apellido: "Lopez", fecha_nacimiento: "1997-10-15", email: "juanl@gmail.com", telefono: "3512733838", activo: 1 },
        { id_estudiante: 2, nombre: "Nicolas", apellido: "Marchi", fecha_nacimiento: "1999-04-05", email: "nicolasma@gmail.com", telefono: "3517873992", activo: 1 },
        { id_estudiante: 3, nombre: "Santiago", apellido: "Sosa", fecha_nacimiento: "1998-03-07", email: "santiagos@gmail.com", telefono: "3512733838", activo: 1 },
        { id_estudiante: 4, nombre: "Diego", apellido: "Ramos", fecha_nacimiento: "2000-09-14", email: "diegov@gmail.com", telefono: "3517873992", activo: 1 },
        { id_estudiante: 5, nombre: "Marcos", apellido: "Alamda", fecha_nacimiento: "2000-09-10", email: "marcosal@gmail.com", telefono: "3516764898", activo: 1 },
        { id_estudiante: 6, nombre: "Nahuel", apellido: "Losada", fecha_nacimiento: "1999-01-01", email: "nahuelos@gmail.com", telefono: "3512724900", activo: 1 },
        { id_estudiante: 7, nombre: "Pablo", apellido: "Heredia", fecha_nacimiento: "2002-05-05", email: "pabloher@gmail.com", telefono: "3528954344", activo: 1 },
        { id_estudiante: 8, nombre: "Mateo", apellido: "Paz", fecha_nacimiento: "2001-06-05", email: "mateop@gmail.com", telefono: "3516764898", activo: 1 },
        { id_estudiante: 9, nombre: "Guillermo", apellido: "Martinez", fecha_nacimiento: "2003-11-05", email: "guillemart@gmail.com", telefono: "3517873992", activo: 1 },

    ];


    // Crear 
    const estudianteBecaData = [
        { id_estudiante: 1, id_beca: 11, fecha_asignacion: "2011-01-01", activo: 1 },
        { id_estudiante: 2, id_beca: 2, fecha_asignacion: "2010-11-04", activo: 1 },
        { id_estudiante: 3, id_beca: 1, fecha_asignacion: "2014-05-04", activo: 1 },
        { id_estudiante: 4, id_beca: 55, fecha_asignacion: "2016-09-10", activo: 1 },
        { id_estudiante: 10, id_beca: 5, fecha_asignacion: "2015-07-05", activo: 1 },
        { id_estudiante: 22, id_beca: 54, fecha_asignacion: "2015-06-06", activo: 1 },
        { id_estudiante: 6, id_beca: 10, fecha_asignacion: "2018-08-01", activo: 1 },
        { id_estudiante: 7, id_beca: 9, fecha_asignacion: "2019-02-01", activo: 1 },
        { id_estudiante: 90, id_beca: 5000, fecha_asignacion: "2015-08-01", activo: 1 },
        { id_estudiante: 9, id_beca: 4, fecha_asignacion: "2020-03-03", activo: 1 },

    ];

    const cursoData = [
        { nombre: "Introducción a la Programación con Python", descripcion: "Aprende los fundamentos de la programación utilizando Python, uno de los lenguajes más populares y versátiles.", fecha_inicio: "2024-07-01", fecha_fin: "2024-09-01", activo: 1 },
        { nombre: "Marketing Digital y Redes Sociales", descripcion: "Descubre cómo aprovechar las plataformas digitales para promocionar productos y servicios de manera efectiva.", fecha_inicio: "2024-08-01", fecha_fin: "2024-10-01", activo: 1 },
        { nombre: "Fundamentos de la Inteligencia Artificial", descripcion: "Introducción a los conceptos básicos de la inteligencia artificial y sus aplicaciones en diversas industrias", fecha_inicio: "2024-09-01", fecha_fin: "2024-11-01", activo: 1 },
        { nombre: "Diseño Gráfico con Adobe Illustrator", descripcion: "Aprende a crear diseños gráficos profesionales utilizando Adobe Illustrator, una herramienta líder en la industria.", fecha_inicio: "2024-07-15", fecha_fin: "2024-10-15", activo: 1 },
        { nombre: "Habilidades de Comunicación y Presentación", descripcion: "Mejora tus habilidades de comunicación y aprende a hacer presentaciones efectivas y persuasivas.", fecha_inicio: "2024-08-15", fecha_fin: "2024-10-15", activo: 1 },
        { nombre: "Desarrollo de Aplicaciones Móviles con React Native", descripcion: "Aprende a desarrollar aplicaciones móviles multiplataforma utilizando React Native.", fecha_inicio: "2024-09-15", fecha_fin: "2024-12-15", activo: 1 },
        { nombre: "Finanzas Personales y Planificación Financiera", descripcion: "Aprende a desarrollar aplicaciones móviles multiplataforma utilizando React Native.", fecha_inicio: "2024-10-01", fecha_fin: "2024-12-01", activo: 1 },
        { nombre: "Ciencia de Datos y Análisis Estadístico", descripcion: "Adquiere conocimientos básicos sobre cómo gestionar tus finanzas personales y planificar tu futuro financiero.", fecha_inicio: "2024-10-01", fecha_fin: "2024-12-01", activo: 1 },
        { nombre: "Gestión de Proyectos con Metodologías Ágiles", descripcion: "Introducción a la ciencia de datos y el análisis estadístico para la toma de decisiones informadas.", fecha_inicio: "2024-07-01", fecha_fin: "2024-09-01", activo: 1 },


    ];

    // Crear Profesores
    const profesoresData = [
        { nombre: "Juan", apellido: "Guzman", fecha_contratacion: "2024-05-03", id_departamento: 1, salario: 20530.02, telefono: "3512538954", activo: 1 },
        { nombre: "Camila", apellido: "Gomez", fecha_contratacion: "2011-02-05", id_departamento: 1, salario: 84923.15, telefono: "3518347295", activo: 1 },
        { nombre: "Jose", apellido: "Gonzalez", fecha_contratacion: "2015-03-08", id_departamento: 2, salario: 92734.05, telefono: "3519327634", activo: 1 },
        { nombre: "Rodolfo", apellido: "Marandino", fecha_contratacion: "2005-08-09", id_departamento: 3, salario: 132897.21, telefono: "351325853", activo: 1 },
        { nombre: "Teresa", apellido: "Medran", fecha_contratacion: "2000-02-07", id_departamento: 5, salario: 155327.28, telefono: "3512867354", activo: 1 },
        { nombre: "Clementina", apellido: "Ledesma", fecha_contratacion: "2015-07-02", id_departamento: 7, salario: 95894.03, telefono: "3519027456", activo: 1 },
        { nombre: "Abigail", apellido: "Pino", fecha_contratacion: "2020-03-01", id_departamento: 6, salario: 44856.92, telefono: "3516230053", activo: 1 },
        { nombre: "Arturo", apellido: "Capristo", fecha_contratacion: "2019-02-07", id_departamento: 9, salario: 56932.75, telefono: "3519645271", activo: 1 },
        { nombre: "Juliana", apellido: "Torre", fecha_contratacion: "2021-09-06", id_departamento: 5, salario: 32854.62, telefono: "3510986472", activo: 1 },
        { nombre: "Mateo", apellido: "Oten", fecha_contratacion: "2024-06-10", id_departamento: 4, salario: 40723.65, telefono: "3518930245", activo: 1 },
    ];

    // Crear asignaciones
    const asignacionesData = [
        { id_profesor: 1, id_curso: 2, fecha_asignacion: "2021-04-02", activo: 1 },
        { id_profesor: 2, id_curso: 4, fecha_asignacion: "2023-04-03", activo: 1 },
        { id_profesor: 3, id_curso: 6, fecha_asignacion: "2022-03-05", activo: 1 },
        { id_profesor: 4, id_curso: 9, fecha_asignacion: "2021-02-07", activo: 1 },
        { id_profesor: 5, id_curso: 3, fecha_asignacion: "2022-04-07", activo: 1 },
        { id_profesor: 6, id_curso: 1, fecha_asignacion: "2024-04-03", activo: 1 },
        { id_profesor: 7, id_curso: 7, fecha_asignacion: "2021-08-04", activo: 1 },
        { id_profesor: 8, id_curso: 5, fecha_asignacion: "2019-03-02", activo: 1 },
        { id_profesor: 9, id_curso: 8, fecha_asignacion: "2023-02-01", activo: 1 },
        { id_profesor: 10, id_curso: 12, fecha_asignacion: "2022-05-09", activo: 1 },
    ];
    try {
        await Departamento.bulkCreate(departamentosData);
        console.log("Departamentos creados correctamente");

        await Inscripcion.bulkCreate(inscripcionesData);
        console.log("Inscripciones creadas correctamente");

        await Examen.bulkCreate(examenesData);
        console.log("Exámenes creados correctamente");

        await Calificacion.bulkCreate(calificacionesData);
        console.log("Calificaciones creadas correctamente");

        await Beca.bulkCreate(becasData);
        console.log("Becas creadas correctamente");

        await Estudiante.bulkCreate(estudiantesData);
        console.log("Estudiantes creados correctamente");

        await Curso.bulkCreate(cursoData);
        console.log("Departamentos creados correctamente");

        await EstudianteBeca.bulkCreate(estudianteBecaData);
        console.log("Inscripciones creadas correctamente");

        await Profesor.bulkCreate(profesoresData);
        console.log("Profesores creados correctamente");

        await Asignacion.bulkCreate(asignacionesData);
        console.log("Asignaciones creadas correctamente");
    } catch (error) {
        console.error("Error al inicializar datos:", error);
    }
};

