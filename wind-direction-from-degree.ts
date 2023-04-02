export function windDirectionFromDegree(degree) {
  degree = (degree + 11.25) % 360;

  if (degree < 22.5) return "N";
  if (degree < 45) return "NNE";
  if (degree < 67.5) return "NE";
  if (degree < 90) return "ENE";
  if (degree < 112.5) return "E";
  if (degree < 135) return "ESE";
  if (degree < 157.5) return "SE";
  if (degree < 180) return "SSE";
  if (degree < 202.5) return "S";
  if (degree < 225) return "SSW";
  if (degree < 247.5) return "SW";
  if (degree < 270) return "WSW";
  if (degree < 292.5) return "W";
  if (degree < 315) return "WNW";
  if (degree < 337.5) return "NW";
  if (degree < 360) return "NNW";
}
