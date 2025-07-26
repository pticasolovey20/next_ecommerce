export const getBaseURL = () => {
  if (process.env.VERCEL_ENV === "production") {
    return process.env.BASE_URL || "https://your-production-api.com";
  }

  if (process.env.VERCEL_ENV === "preview") {
    return process.env.BASE_URL || "https://your-staging-api.com";
  }

  return process.env.BASE_URL || "http://localhost:3000";
};
