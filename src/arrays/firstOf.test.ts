import {firstOf} from "./firstOf";
import { describe, it, expect } from "@jest/globals";

describe("First array element", () => {
    it("must return first element", () => {
        expect(firstOf([1,2,3])).toBe(1);
        expect(firstOf(['a', 'b', 'c'])).toBe('a');
    });

    it("must return indefined if arr is empty", () => {
        expect(firstOf([])).toBeUndefined();
    });
});

