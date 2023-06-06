const Campaign = require("../models/campaign");
const mongoose = require("mongoose");


// ---CREATING A  CAMPAIGN ---
exports.campaigns_create_new = async (req, res) => {
  try {
    const newCampaign = new Campaign({
      _id: new mongoose.Types.ObjectId(),
      campaign_name: req.body.campaign_name || "",
      product: req.body.product || "",
      cost: req.body.cost || 0,

      duration: {
        startDate: req.body.startDate || "",
        endDate: req.body.endDate || "",
      },
      awareness: {
        impressions: req.body.impressions || 0,
        reach: req.body.reach || 0,
        clicks: req.body.clicks || 0,
        phone_calls: req.body.phone_calls || 0,
        meetings: req.body.meetings || 0,
      },

      interest: {
        demo: req.body.demo || 0,
        signups: req.body.signups || 0,
      },

      engagement: {
        media_uploads: req.body.media_uploads || 0,
        stakeholder_buy_in: req.body.stakeholder_buy_in || 0,
        logins: req.body.logins || 0,
      },
      activation: {
        add_credit_card: req.body.add_credit_card || 0,
        paid_pilot: req.body.paid_pilot || 0,
        total_credits_purchased: req.body.total_credits_purchased || 0,
        // cash_purchase: req.body.cash_purchase || 0,
        // visa_purchase: req.body.visa_purchase || 0,
        cash_purchase_amount: req.body.cash_purchase_amount || 0,
        visa_purchase_amount: req.body.visa_purchase_amount || 0,
      },
      notes: req.body.notes || "",
    });

    await newCampaign.save();
    res.status(200).json({
      message: "Successfully created a new campaign",
      campaign: newCampaign,
    });
  } catch (error) {
    res.status(401).json({
      errorMessage: "Failed to create a new campaign",
      error: error.message,
    });
  }
};

//----UPDATING A CAMPAIGN ----

exports.compaigns_update_by_id = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateOperations = {};

    for (const operation of req.body) {
      updateOperations[operation.propertyName] = operation.value;
    }

    const updatedCampaign = await Campaign.findByIdAndUpdate(
      { _id: _id },
      { $set: updateOperations }
    );

    res.status(200).json({
      message: "Successfully updated campaign details",
      status: updatedCampaign,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: "Failed to patch a camapaign",
      error: error.message,
    });
  }
};

//----GETTING ALL THE CAMPAIGNS---
exports.campaigns_get_all = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json({
      message: "Successfully fetched all the campaigns",
      campaigns: campaigns,
    });
  } catch (error) {
    res.status(401).json({
      errorMessage: "Failed to fetch the campaigns",
      error: error.message,
    });
  }
};

//----DELETING A CAMPAIGN BY ID ---
exports.campaigns_delete_by_id = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Campaign.findByIdAndDelete(id);
    res.status(200).json({
      message: "Successfully deleted a CAMPAIGN",
      result: result,
    });
  } catch (error) {
    res.status(401).json({
      errorMessage: "Failed to delete A CAMPAIGN",
      error: error.message,
    });
  }
};

//----UPDATING A CAMPAIGN ----
exports.campaigns_get_by_id = async (req, res) => {
  try {
    const id = req.params.id;
    const campaign = await Campaign.findById(id);
    res.status(200).json({
      message: "Successfully fetched a campaign",
      campaign: campaign,
    });
  } catch (error) {
    res.status(401).json({
      errorMessage: "Failed to fetch a campaign by ID",
      error: error.message,
    });
  }
};
