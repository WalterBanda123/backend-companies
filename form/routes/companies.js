const express = require("express");
const checkAuth = require("./../middleware/middleware");
const router = express.Router();
const CompaniesController = require("../controllers/companies");
// ---CREATING A NEW FORM ---

router.post("/", checkAuth, CompaniesController.companies_create_new);
router.get("/", checkAuth, CompaniesController.companies_get_all);
router.get("/:id", checkAuth, CompaniesController.company_update_by_id);
router.delete(
  "/:companyId",
  checkAuth,
  CompaniesController.company_delete_by_id
);
router.patch(
  "/:companyId",
  checkAuth,
  CompaniesController.companies_edit_by_id
);
router.post("/search", CompaniesController.text_search);

module.exports = router;
