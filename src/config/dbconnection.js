import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbCluster = process.env.DB_CLUSTER;
const dbDomain = process.env.DB_DOMAIN;
const dbUrl = `mongodb+srv://${dbUser}:${dbPassword}@${dbDomain}/?retryWrites=true&w=majority&appName=${dbCluster}`;

const client = new MongoClient(dbUrl, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true }
});

let db;

export async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("consultorio");
    console.log("✅ Conectado a MongoDB Atlas");
  }
  return db;
}