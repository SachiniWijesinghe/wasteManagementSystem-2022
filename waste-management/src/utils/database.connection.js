import mongoose, { connection } from "mongoose";
import config from "../configs";
import logger from "../utils/logger";


let database;
const connect = async() => {
    const MONGODB_URL = config.DB_CONNECTION_STRING;
    if (database) return;
    mongoose.connect(MONGODB_URL)
        .then((connection) => {
            database = connection;
            logger.info("Database synced");

        }).catch((err) => {
            logger.error(err.massage);

        })
}
export { connect };