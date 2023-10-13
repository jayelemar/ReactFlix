import { Sequelize } from "sequelize";
 
const db = new Sequelize('reactflix', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;