import { Sequelize } from 'sequelize';

const db = new Sequelize('vue3-fullstack', 'root', 'Admin', {
  host: 'localhost',
  dialect: 'mysql'
});

export { db };