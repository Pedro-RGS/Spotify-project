import { MongoClient } from "mongodb";
import "dotenv/config";

const URI = process.env.DB_URI;

const client = new MongoClient(URI);

export const db = client.db(process.env.DB_NAME);