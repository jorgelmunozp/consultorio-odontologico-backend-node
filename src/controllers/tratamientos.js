import { ObjectId } from "mongodb";
import { connectDB } from "../config/dbconnection.js";

export async function getTratamientos(req, res) {
  const db = await connectDB();
  const data = await db.collection("tratamientos").find().toArray();
  res.json(data);
}

export async function getTratamiento(req, res) {
  const db = await connectDB();
  const item = await db.collection("tratamientos").findOne({ _id: new ObjectId(req.params.id) });
  if (!item) return res.status(404).json({ message: "Tratamiento no encontrado" });
  res.json(item);
}

export async function createTratamiento(req, res) {
  const db = await connectDB();
  const result = await db.collection("tratamientos").insertOne(req.body);
  res.json(result);
}

export async function updateTratamiento(req, res) {
  const db = await connectDB();
  const result = await db.collection("tratamientos").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
}

export async function deleteTratamiento(req, res) {
  const db = await connectDB();
  const result = await db.collection("tratamientos").deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
}
