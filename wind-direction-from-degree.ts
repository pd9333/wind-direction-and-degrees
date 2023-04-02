export function windDirectionFromDegree(degree) {
  degree = (degree + 11.25) % 360;

  if (degree < 22.5) return "N";
  else if (degree >= 22.5 && degree < 45) return "NNE";
  else if (degree >= 45 && degree < 67.5) return "NE";
  else if (degree >= 67.5 && degree < 90) return "ENE";
  else if (degree >= 90 && degree < 112.5) return "E";
  else if (degree >= 112.5 && degree < 135) return "ESE";
  else if (degree >= 135 && degree < 157.5) return "SE";
  else if (degree >= 157.5 && degree < 180) return "SSE";
  else if (degree >= 180 && degree < 202.5) return "S";
  else if (degree >= 202.5 && degree < 225) return "SSW";
  else if (degree >= 225 && degree < 247.5) return "SW";
  else if (degree >= 247.5 && degree < 270) return "WSW";
  else if (degree >= 270 && degree < 292.5) return "W";
  else if (degree >= 292.5 && degree < 315) return "WNW";
  else if (degree >= 315 && degree < 337.5) return "NW";
  else if (degree >= 337.5) return "NNW";
}
