const express = require("express");
const router = express.Router();
const CampaignsController = require("../controllers/campaigns");
const checkAuth = require("./../middleware/middleware");

router.post(
  "/create-campaign",
  checkAuth,
  CampaignsController.campaigns_create_new
);
router.patch(
  "/update-campaign/:id",
  CampaignsController.compaigns_update_by_id
);
router.get("/", checkAuth, CampaignsController.campaigns_get_all);
router.get("/:id", checkAuth, CampaignsController.campaigns_get_by_id);
router.delete(
  "/delete/:id",
  checkAuth,
  CampaignsController.campaigns_delete_by_id
);
router.post('/search',checkAuth, CampaignsController.text_search_campaign)
module.exports = router;
