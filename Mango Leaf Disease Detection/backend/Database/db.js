import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";

import ENV from '../config.js'

async function connect(){

    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

try {
    mongoose.set('strictQuery', false);
    // const db = await mongoose.connect(getUri);
    console.log("top",ENV.ATLAS_URI)
    const db = await mongoose.connect(ENV.ATLAS_URI);
    console.log("Database Connected")
    return db;
} catch (error) {
    console.log(error)
}


}

export default connect;