export const getBaseURL = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
};
