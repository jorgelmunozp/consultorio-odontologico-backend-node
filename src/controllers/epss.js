import { ObjectId } from "mongodb";
import { connectDB } from "../server/dbconnection.js";

export async function getEpss(req, res) {
  const db = await connectDB();
  const data = await db.collection("epss").find().toArray();
  res.json(data);
}

export async function getEps(req, res) {
  const db = await connectDB();
  const item = await db.collection("epss").findOne({ _id: new ObjectId(req.params.id) });
  if (!item) return res.status(404).json({ message: "EPS no encontrada" });
  res.json(item);
}

export async function createEps(req, res) {
  const db = await connectDB();
  const result = await db.collection("epss").insertOne(req.body);
  res.json(result);
}

export async function updateEps(req, res) {
  const db = await connectDB();
  const result = await db.collection("epss").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
}

export async function deleteEps(req, res) {
  const db = await connectDB();
  const result = await db.collection("epss").deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
}
