const reportController = require("../Controllers/reportController");
const express = require("express");
const auth = require("../Middleware/auth");
const router = express.Router();

// GET route to fetch all pending reports
router.get("/get-pending-reports", reportController.getAllPendingReports);

router.put("/change-to-completed/:id", reportController.changeToResolved);

// Post the reports
router.post("/:reportableId", reportController.createReport);

module.exports = router;
