import api from "./axios";

export const getFeedbacks = async () => {
  const response = await api.get("/feedback");
  return response.data;
};

export const createFeedback = async (feedback) => {
  const response = await api.post("/feedback", feedback);
  return response.data;
};