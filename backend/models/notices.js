const { Schema, model, SchemaTypes } = require("mongoose");

const noticesSchema = new Schema(
  {
    owner: { type: SchemaTypes.ObjectId, ref: "users" },
    _id: Object,
    category: {
      type: String,
      enum: ["sell", "lost-found", "for-free", "none"],
      required: [true, "Category is required"],
      default: "none",
    },
    typeofpet: {
      type: String,
      enum: ["cat", "dog"],
      required: [true, "Type of pet is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    birthday: {
      type: Date,
    },
    breed: {
      type: String,
      required: [true, "Breed is required"],
    },
    sex: {
      type: String,
      enum: ["boy", "girl"],
      required: true,
    },
    size: {
      type: String,
      enum: ["big", "average", "small"],
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    price: {
      type: Number,
    },
    currency: {
      type: String,
    },
    passport: {
      type: String,
      required: true,
    },
    sterilization: {
      type: String,
      enum: ["yes", "no"],
      required: true,
    },
    lives: {
      type: String,
      enum: ["in street", "shelter", "at volunteers", "home"],
      required: true,
    },
    comments: {
      type: String,
      required: [true, "Comments is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "URL can't be empty"],
      unique: true,
    },
    imageUrl_1: {
      type: String,
      unique: true,
    },
    imageUrl_2: {
      type: String,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Notices = model("notices", noticesSchema);

module.exports = Notices;
