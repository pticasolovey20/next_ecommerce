"use server";

export const subscribe = async (formData: FormData): Promise<void> => {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    console.error("Invalid email provided");
    // TOAST
    return;
  }

  try {
    console.log("Successfully subscribed:", email);
    // TOAST
  } catch (error) {
    console.error("Subscription error:", error);
    // TOAST
  }
};
