// Helper to get today's date in YYYY-MM-DD
export const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

// Helper to get current time in HH:MM (rounded to nearest minute)
export const getCurrentTime = () => {
  const now = new Date();
  return now.toTimeString().slice(0, 5); // "HH:MM"
};