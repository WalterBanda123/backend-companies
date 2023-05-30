const mongoose = require("mongoose");

const CampaignSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  campaign_name: { type: String, default: "" },
  product: {
    type: String,
    enum: ["lite", "standard", "ios", "android", ""],
    default: "",
  },

  cost: { type: Number, default: 0 },
  duration: { type: Date, default: new Date() },
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
    cash_purchase: { type: Number, default: 0 },
    visa_purchase: { type: Number, default: 0 },
    cash_purchase_amount: { type: Number, default: 0 },
    visa_purchase_amount: { type: Number, default: 0 },
  },

  notes: { type: String, default: "" },
});

module.exports = mongoose.model("Campaign", CampaignSchema);
