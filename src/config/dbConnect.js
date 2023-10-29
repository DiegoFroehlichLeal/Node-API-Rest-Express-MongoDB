import mongoose from "mongoose";
import 'dotenv/config'

//require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.mongodb.net/${process.env.MONGODB_COLLECTION}`);

let db = mongoose.connection;

export default db;