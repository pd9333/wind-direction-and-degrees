export function windDirectionFromDegree(degree) {
  degree = (degree + 11.25) % 360;

  const endingDegrees = [
    22.5, 45, 67.5, 90,
    112.5, 135, 157.5, 180,
    202.5, 225, 247.5, 270,
    292.5, 315, 337.5, 360,
  ];
  const windDirections = [
    "N", "NNE", "NE", "ENE",
    "E", "ESE", "SE", "SSE",
    "S", "SSW", "SW", "WSW",
    "W", "WNW", "NW", "NNW",
  ];
  for (let i = 0; i < endingDegrees.length; i++) {
    if (degree < endingDegrees[i]) return windDirections[i];
  }
}
