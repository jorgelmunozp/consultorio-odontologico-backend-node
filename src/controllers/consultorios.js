import { ObjectId } from "mongodb";
import { connectDB } from "../config/dbconnection.js";

export async function getConsultorios(req, res) {
  const db = await connectDB();
  const data = await db.collection("consultorios").find().toArray();
  res.json(data);
}

export async function getConsultorio(req, res) {
  const db = await connectDB();
  const item = await db.collection("consultorios").findOne({ _id: new ObjectId(req.params.id) });
  if (!item) return res.status(404).json({ message: "Consultorio no encontrado" });
  res.json(item);
}

export async function createConsultorio(req, res) {
  const db = await connectDB();
  const result = await db.collection("consultorios").insertOne(req.body);
  res.json(result);
}

export async function updateConsultorio(req, res) {
  const db = await connectDB();
  const result = await db.collection("consultorios").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
}

export async function deleteConsultorio(req, res) {
  const db = await connectDB();
  const result = await db.collection("consultorios").deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
}
