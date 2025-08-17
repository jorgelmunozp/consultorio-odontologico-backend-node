import { ObjectId } from "mongodb";
import { connectDB } from "../config/database.js";

export async function getEspecialidades(req, res) {
  const db = await connectDB();
  const data = await db.collection("especialidades").find().toArray();
  res.json(data);
}

export async function getEspecialidad(req, res) {
  const db = await connectDB();
  const item = await db.collection("especialidades").findOne({ _id: new ObjectId(req.params.id) });
  if (!item) return res.status(404).json({ message: "Especialidad no encontrada" });
  res.json(item);
}

export async function createEspecialidad(req, res) {
  const db = await connectDB();
  const result = await db.collection("especialidades").insertOne(req.body);
  res.json(result);
}

export async function updateEspecialidad(req, res) {
  const db = await connectDB();
  const result = await db.collection("especialidades").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
}

export async function deleteEspecialidad(req, res) {
  const db = await connectDB();
  const result = await db.collection("especialidades").deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
}
