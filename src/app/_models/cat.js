import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.connect(process.env.MONGODB_URI, { dbName: "cats" }).then(
  () => {
    console.log("Promise: We have a connection");
  },
  (err) => {
    console.log("Promise: ERROR CONNECTING", err);
  }
);

// Define Schema
const catsSchema = new mongoose.Schema(
  {
    createdAt: { type: Date, default: Date.now },
    name: String,
    description: String,
    isActive: Boolean,
  },
  {
    timestamps: true,
  }
);

// Convert Schema to Model
const Cats = mongoose.models.Cats || mongoose.model("Cats", catsSchema);

export default Cats;
