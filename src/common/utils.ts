export function getTime(
  dt: number,
  timeZone: string,
  units: "metric" | "imperial",
  onlyTime = false,
  onlyDay = false,
  shortDay = false
) {
  const date = new Date(dt * 1000);
  const day = date.toLocaleDateString("en-gb", {
    weekday: onlyDay && !shortDay ? "short" : "long",
  });
  const time = `${date.toLocaleTimeString(
    `en-${units === "metric" ? "gb" : "us"}`,
    {
      timeZone,
      hour: "numeric",
    }
  )}${units === "metric" ? ":00" : ""}`;
  return onlyTime ? time : onlyDay ? day : `${day}, ${time}`;
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
