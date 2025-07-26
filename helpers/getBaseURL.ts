export const getBaseURL = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.BASE_URL || "https://your-production-api.com";
  }

  if (process.env.NODE_ENV === "development") {
    return process.env.BASE_URL || "https://your-staging-api.com";
  }

  return process.env.BASE_URL || "http://localhost:3000";
};
