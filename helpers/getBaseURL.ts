export const getBaseURL = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.BASE_URL;
  }

  return process.env.BASE_URL || "http://localhost:3000";
};
