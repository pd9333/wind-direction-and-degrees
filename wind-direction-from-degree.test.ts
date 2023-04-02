import {describe, expect, it} from "vitest";
import {windDirectionFromDegree, windDirections} from "./wind-direction-from-degree";

const spanPrecision = 0.01;

describe("windDirectionFromDegree", () => {
  it("should recognize wind from all degrees", () => {
    const spannedDegreesOfADirection = 360 / windDirections.length;
    const startingDegree = 360 - spannedDegreesOfADirection / 2;
    for (let i = 0; i < windDirections.length; i++) {
      for (let j = 0; j < spannedDegreesOfADirection; j += spanPrecision) {
        const degree = (startingDegree + i * spannedDegreesOfADirection + j) % 360;
        expect(windDirectionFromDegree(degree)).toEqual(windDirections[i])
      }
    }
  });
  it("could handle negative inputs", () => {
    for (let i = -360; i < 0; i+= spanPrecision) {
      expect(windDirectionFromDegree(i)).toEqual(windDirectionFromDegree(360 + i));
    }
  });
})
