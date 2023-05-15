const Company = require("./../models/company");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// ---CREATING A NEW FORM ---

router.post("/", async (req, res) => {
  try {
    const newCompany = new Company({
      _id: new mongoose.Types.ObjectId(),
      companyName: req.body.companyName,
      socialMediaLink: req.body.socialMediaLink,
      companyPhone: req.body.companyPhone,
      companyWebsite: req.body.companyWebsite,
      contactEmail: req.body.contactEmail,
      otherContact: req.body.otherContact,
      status: "Not reached",
      notes: req.body.notes,
      meetingDate: req.body.meetingDate,
      meetingTime: req.body.meetingTime,
    });

    await newCompany.save();
    res.status(200).json({
      message: "Successfully added a new company",
      companyAdded: newCompany,
    });
  } catch (error) {
    res.status(401).json({
      errorMessage: "Failed to create a new company",
      error: error.message,
    });
  }
});

//----GETTING ALL THE COMPANIES---
router.get("/", async (req, res) => {
 
  try {
   
    const companies = await Company.find();
    res.status(200).json({
      message: "Successfully fetched all the companies",
      companies: companies,
    });
  } catch (error) {
    res.status(401).json({
      errorMessage: "Failed to fetch the companies",
      error: error.message,
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const company = await Company.findById(id);
    res.status(200).json({
      message: "Successfully fetched a company",
      company: company,
    });
  } catch (error) {
    res.status(401).json({
      errorMessage: "Failed to fetch a company by ID",
      error: error.message,
    });
  }
});

//---DELETING COMPANY
router.delete("/:companyId", async (req, res) => {
  try {
    const id = req.params.companyId;
    const result = await Company.findByIdAndDelete(id);
    res.status(200).json({
      message: "Successfully deleted a company",
      result: result,
    });
  } catch (error) {
    res.status(401).json({
      errorMessage: "Failed to delete company",
      error: error.message,
    });
  }
});

//--EDITING COMPANY---
router.patch("/:companyId", async (req, res) => {
  try {
    const id = req.params.companyId;
    const updateOperations = {};
    for (const operation of req.body) {
      updateOperations[operation.propertyName] = operation.value;
    }
    const updatedCompany = await Company.findByIdAndUpdate(
      { _id: id },
      { $set: updateOperations }
    );

    res.status(200).json({
      message: "Successfully patched company details",
      status: updatedCompany,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: "Failed to patch a company",
      error: error.message,
    });
  }
});

module.exports = router;
