import { ObjectId } from "mongodb";
import { connectDB } from "../config/database.js";

export async function getDoctores(req, res) {
  const db = await connectDB();
  const doctores = await db.collection("doctores").find().toArray();
  res.json(doctores);
}

export async function getDoctor(req, res) {
  const db = await connectDB();
  const doctor = await db.collection("doctores").findOne({ _id: new ObjectId(req.params.id) });
  if (!doctor) return res.status(404).json({ message: "Doctor no encontrado" });
  res.json(doctor);
}

export async function createDoctor(req, res) {
  const db = await connectDB();
  const result = await db.collection("doctores").insertOne(req.body);
  res.json(result);
}

export async function updateDoctor(req, res) {
  const db = await connectDB();
  const result = await db.collection("doctores").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
}

export async function deleteDoctor(req, res) {
  const db = await connectDB();
  const result = await db.collection("doctores").deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
}
