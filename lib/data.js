export function formatReadableDate(dateInput) {
  const date = new Date(dateInput);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function todayISODate() {
  return new Date().toISOString().split("T")[0];
}