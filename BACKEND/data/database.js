import {Sequelize} from 'sequelize';

// Configuración de la conexión a la base de datos SQLite
const sequelize = new Sequelize({
    dialect:"sqlite",
    storage: "./data/database.sqlite"
});

// Verificación de la conexión
async function authenticate() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida con éxito.');
    } catch (error) {
        console.error('No se puede conectar a la base de datos:', error);
    }
}

authenticate();

export default sequelize;
