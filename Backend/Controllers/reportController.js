const reportModel = require("../Models/reportModel");

class reportController {
  async getAllPendingReports(req, res) {
    try {
      const page = parseInt(req.query.page) || 1; // Get the page number from query params, default to 1
      const limit = parseInt(req.query.limit) || 1; // Get the limit from query params, default to 10
      const skip = (page - 1) * limit; // Calculate the number of documents to skip

      const totalReports = await reportModel.countDocuments({
        status: "pending",
      });
      const totalPages = Math.ceil(totalReports / limit);

      const reports = await reportModel
        .find({ status: "pending" })
        .populate("reporter")
        .skip(skip)
        .limit(limit)
        .sort({ updatedAt: -1 }); // Sort by creation date, newest first

      res.status(200).json({
        reports,
        currentPage: page,
        totalPages,
        totalReports,
        reportsPerPage: limit,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async changeToResolved(req, res) {
    try {
      const report = await reportModel.findByIdAndUpdate(
        req.params.id,
        { status: "resolved" },
        { new: true }
      );
      res.status(200).json({ report });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async createReport(req, res) {
    try {
      const { reportableType, reason } = req.body;
      const { reportableId } = req.params;
      const reporter = req.cookies.user_id;

      if (!reporter) {
        return res
          .status(401)
          .json({ message: "Unauthorized. Please log in." });
      }

      // Create and save the new report
      const report = new reportModel({
        reportableType,
        reportableId,
        reporter,
        reason,
      });

      await report.save();
      res
        .status(201)
        .json({ message: "Report submitted successfully.", report });
    } catch (error) {
      res.status(500).json({ message: "Failed to submit report.", error });
    }
  }
}

module.exports = new reportController();
