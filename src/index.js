import app from "./app.js";
import { sequelize } from "./database/database.js";

//const app = express();

async function main() {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully.");
    app.listen(4001);
    console.log("server on port 4000");
  } catch (error) {
    console.error("unable to conecte to database", error);
  }
}

main();
