export function getUserName(user: any): string {
  // Handle null or undefined user
  if (!user) {
    return "Guest";
  }

  // Handle missing or empty name
  if (!user.name || user.name.trim() === "") {
    return "Anonymous";
  }

  // Return trimmed name
  return user.name.trim();
}
