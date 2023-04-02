import {describe, expect, it} from "vitest";
import {windDirectionFromDegree, windDirections, windDirectionSpan} from "./wind-direction-from-degree";

const spanPrecision = 0.01;

describe("windDirectionFromDegree", () => {
  it("should recognize wind from all degrees", () => {
    const startingDegree = 360 - windDirectionSpan / 2;
    for (let i = 0; i < windDirections.length; i++) {
      for (let j = 0; j < windDirectionSpan; j += spanPrecision) {
        const degree = (startingDegree + i * windDirectionSpan + j) % 360;
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
