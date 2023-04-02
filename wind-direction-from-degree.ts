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
  const i = binarySearchFindHeadOfSecondHalf(endingDegrees.length, i => {
    return degree < endingDegrees[i];
  });
  return windDirections[i];
}

function binarySearchFindHeadOfSecondHalf(size, isSecondHalf) {
  let begin = 0;
  let end = size;
  while (begin < end) {
    let mid = Math.floor((begin + end) / 2);
    if (isSecondHalf(mid)) {
      end = mid;
    } else {
      begin = mid + 1;
    }
  }
  return begin;
}
