const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  companyName: { type: String, required: true },
  socialMediaLink: String,
  companyPhone: String,
  companyWebsite: String,
  contactEmail: String,
  otherContact: String,
  status: {
    type: String,
    default: "Not reached",
    enum: [
      "Not reached",
      "Rejected",
      "Reached",
      "Onboarding",
      "Free credits onboarding",
    ],
  },
  notes: { type: String, default: "" },
  meetingDate: { type: Date, default: "" },
  meetingTime: { type: String, default: "" },
  companySize: {
    type: String,
    trim: true,
    default: "Not specified",
    enum: ["Enteprise", "Mid size", "Micro size", "Not specified"],
  },
});

CompanySchema.index({
  companyName: "text",
  status: "text",
  companySize: "text",
});

module.exports = mongoose.model("Company", CompanySchema);
