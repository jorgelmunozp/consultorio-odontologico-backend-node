import { ObjectId } from "mongodb";
import { connectDB } from "../server/dbconnection.js";

export async function getCitas(req, res) {
  const db = await connectDB();
  const citas = await db.collection("citas").find().toArray();
  res.json(citas);
}

export async function getCita(req, res) {
  const db = await connectDB();
  const cita = await db.collection("citas").findOne({ _id: new ObjectId(req.params.id) });
  if (!cita) return res.status(404).json({ message: "Cita no encontrada" });
  res.json(cita);
}

export async function createCita(req, res) {
  const db = await connectDB();

  // Convertir los IDs a ObjectId
  const cita = {
    ...req.body,
    pacienteId: new ObjectId(req.body.pacienteId),
    doctorId: new ObjectId(req.body.doctorId),
  };

  const result = await db.collection("citas").insertOne(cita);
  res.json(result);
}

export async function updateCita(req, res) {
  const db = await connectDB();

  const updateData = { ...req.body };
  if (updateData.pacienteId) updateData.pacienteId = new ObjectId(updateData.pacienteId);
  if (updateData.doctorId) updateData.doctorId = new ObjectId(updateData.doctorId);

  const result = await db.collection("citas").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: updateData }
  );

  res.json(result);
}

export async function deleteCita(req, res) {
  const db = await connectDB();
  const result = await db.collection("citas").deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
}
