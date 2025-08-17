import { MongoClient, ServerApiVersion } from "mongodb";

let dbUser = 'hargomo';
let dbPassword = 'H4rg0m0T1cS4$';
let dbCluster = 'Cluster0';
let dbUrl = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.7sqiuke.mongodb.net/?retryWrites=true&w=majority&appName=${dbCluster}`;

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