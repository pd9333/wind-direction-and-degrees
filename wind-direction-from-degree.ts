export const windDirections = [
  "N", "NNE", "NE", "ENE",
  "E", "ESE", "SE", "SSE",
  "S", "SSW", "SW", "WSW",
  "W", "WNW", "NW", "NNW",
];

export function windDirectionFromDegree(degree) {
  degree = (degree + 11.25) % 360;
  if (degree < 0) degree += 360;
  return windDirections[Math.floor(degree / 22.5)];
}
