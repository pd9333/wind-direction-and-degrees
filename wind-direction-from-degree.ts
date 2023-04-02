export const windDirections = [
  "N", "NNE", "NE", "ENE",
  "E", "ESE", "SE", "SSE",
  "S", "SSW", "SW", "WSW",
  "W", "WNW", "NW", "NNW",
];
export const windDirectionSpan = 360 / windDirections.length;

export function windDirectionFromDegree(degree) {
  degree = (degree + windDirectionSpan / 2) % 360;
  if (degree < 0) degree += 360;
  return windDirections[Math.floor(degree / windDirectionSpan)];
}
