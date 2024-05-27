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
    location: String,
    isActive: Boolean,
  },
  {
    timestamps: true,
  }
);

// Convert Schema to Model
const CatsModel =
  mongoose.models.CatsModel || mongoose.model("CatsModel", catsSchema);

export default CatsModel;
