export function formattedData(date: string): string {
  const data = new Date(date);
  return data.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
