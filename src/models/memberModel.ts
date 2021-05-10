import mongoose from "mongoose";

const memberScheme = new mongoose.Schema({
  telNumber: {
    type: String
  },
  name: {
    type: String
  },
  uniqueId: {
    type: String
  },
  payload: {
    type: String
  }
});

export const Member = mongoose.model("member", memberScheme);