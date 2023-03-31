import mongoose from "mongoose";

mongoose.connect("mongodb+srv://pietrocosentino88:123@api-node.mvci1cj.mongodb.net/Api-node");

let db = mongoose.connection;

export default db;