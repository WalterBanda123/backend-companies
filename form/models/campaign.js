const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  campaign_name: { type: String, default: "" },
  product: {
    type: String,
    enum: [
      "Lite",
      "Standard",
      "IOS",
      "Android",
      "All",
      "Web(Lite & Standard)",
      "Mobile",
      "All",
      "",
    ],
    default: "",
  },

  cost: { type: Number, default: 0 },
  duration: {
    startDate: { type: Date, default: "" },
    endDate: { type: Date, default: "" },
  },
  awareness: {
    impressions: { type: Number, default: 0 },
    reach: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    phone_calls: { type: Number, default: 0 },
    meetings: { type: Number, default: 0 },
  },

  interest: {
    demo: { type: Number, default: 0 },
    signups: { type: Number, default: 0 },
  },

  engagement: {
    media_uploads: { type: Number, default: 0 },
    stakeholder_buy_in: { type: Number, default: 0 },
    logins: { type: Number, default: 0 },
  },

  activation: {
    add_credit_card: { type: Number, default: 0 },
    paid_pilot: { type: Number, default: 0 },
    total_credits_purchased: { type: Number, default: 0 },
    cash_purchase_amount: { type: Number, default: 0 },
    visa_purchase_amount: { type: Number, default: 0 },
  },

  notes: { type: String, default: "" },
});

CampaignSchema.index({ campaign_name: "text", product: "text" });
module.exports = mongoose.model("Campaign", CampaignSchema);
