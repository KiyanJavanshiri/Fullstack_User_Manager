import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      minLength: [3, "Too short firstName"],
      maxLength: [20, "Too long firstName"],
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      minLength: [3, "Too short lastName"],
      maxLength: [20, "Too long lastName"],
      required: true,
    },
    age: {
      type: Number,
      min: [1, "Too small age number"],
      max: [130, "Too big age number"],
      required: true,
    },
    email: {
      type: String,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "email should have correct format"],
      required: true,
    },
    role: {
      type: String,
      enum: {
        values: ["user", "admin"],
        message:
          '{VALUE} is not correct role! choose between "user" or "admin"',
        default: "user",
      },
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model("User", userSchema);
