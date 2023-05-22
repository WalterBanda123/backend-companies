const express = require("express");
const router = express.Router();
const CampaignsController = require("../controllers/campaigns");

router.post("/create-campaign", CampaignsController.campaigns_create_new);
router.patch(
  "/update-campaign/:id",
  CampaignsController.compaigns_update_by_id
);
router.get("/", CampaignsController.campaigns_get_all);
router.get("/:id", CampaignsController.campaigns_get_by_id);
router.delete("/delete/:id", CampaignsController.campaigns_delete_by_id);
module.exports = router;
