const Company = require("./../models/company");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const CompaniesController = require("../controllers/companies");
// ---CREATING A NEW FORM ---

router.post("/",CompaniesController.companies_create_new );
router.get("/", CompaniesController.companies_get_all);
router.get("/:id", CompaniesController.company_update_by_id);
router.delete("/:companyId", CompaniesController.company_delete_by_id)
router.patch("/:companyId", CompaniesController.companies_edit_by_id);


module.exports = router;
