import Feedback from "../models/Feedback.js";

export const createFeedback = async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;

    // Basic validation
    if (!name || !message || !rating) {
      return res.status(400).json({
        success: false,
        message: "Name, message and rating are required.",
      });
    }

    const feedback = await Feedback.create({
      name,
      email,
      message,
      rating,
    });

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully!",
      data: feedback,
    });
  } catch (error) {
    console.error("Create Feedback Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: feedbacks.length,
      data: feedbacks,
    });
  } catch (error) {
    console.error("Get Feedback Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};