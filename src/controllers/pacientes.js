import { ObjectId } from "mongodb";
import { connectDB } from "../config/database.js";

export async function getPacientes(req, res) {
  const db = await connectDB();
  const pacientes = await db.collection("pacientes").find().toArray();
  res.json(pacientes);
}

export async function getPaciente(req, res) {
  const db = await connectDB();
  const paciente = await db.collection("pacientes").findOne({ _id: new ObjectId(req.params.id) });
  if (!paciente) return res.status(404).json({ message: "Paciente no encontrado" });
  res.json(paciente);
}

export async function createPaciente(req, res) {
  const db = await connectDB();
  const result = await db.collection("pacientes").insertOne(req.body);
  res.json(result);
}

export async function updatePaciente(req, res) {
  const db = await connectDB();
  const result = await db.collection("pacientes").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
}

export async function deletePaciente(req, res) {
  const db = await connectDB();
  const result = await db.collection("pacientes").deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
}
