import mongoose from "mongoose";

mongoose.connect("mongodb+srv://diegofrleal:OqmNV2Vfgco4aKVN@cluster0.yyienlj.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;