import { ObjectId } from "mongodb";
import { connectDB } from "../server/dbconnection.js";

export async function getGeneros(req, res) {
  const db = await connectDB();
  const data = await db.collection("generos").find().toArray();
  res.json(data);
}

export async function getGenero(req, res) {
  const db = await connectDB();
  const item = await db.collection("generos").findOne({ _id: new ObjectId(req.params.id) });
  if (!item) return res.status(404).json({ message: "Género no encontrado" });
  res.json(item);
}

export async function createGenero(req, res) {
  const db = await connectDB();
  const result = await db.collection("generos").insertOne(req.body);
  res.json(result);
}

export async function updateGenero(req, res) {
  const db = await connectDB();
  const result = await db.collection("generos").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
}

export async function deleteGenero(req, res) {
  const db = await connectDB();
  const result = await db.collection("generos").deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
}
