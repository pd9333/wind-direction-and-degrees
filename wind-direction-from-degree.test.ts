import {describe, expect, it} from "vitest";
import {windDirectionFromDegree} from "./wind-direction-from-degree";


describe("windDirectionFromDegree", () => {
  it("should recognize wind from all degrees", () => {
    const windDirections = [
      "N", "NNE", "NE", "ENE",
      "E", "ESE", "SE", "SSE",
      "S", "SSW", "SW", "WSW",
      "W", "WNW", "NW", "NNW",
    ]
    const spannedDegreesOfADirection = 360 / windDirections.length;
    const spanPrecision = 0.01;
    const startingDegree = 360 - spannedDegreesOfADirection / 2;
    for (let i = 0; i < windDirections.length; i++) {
      for (let j = 0; j < spannedDegreesOfADirection; j += spanPrecision) {
        const degree = (startingDegree + i * spannedDegreesOfADirection + j) % 360;
        expect(windDirectionFromDegree(degree)).toEqual(windDirections[i])
      }
    }
  })
})
