import { deepClone } from "./deepClone";
import { describe, it, expect } from "@jest/globals";

describe("deepClone", () => {
    it("must copy primitive values", () => {
         expect(deepClone(42)).toBe(42);
         expect(deepClone("Hi!")).toBe("Hi!");
         expect(deepClone(true)).toBe(true);
         expect(deepClone(null)).toBe(null);
    });

    it("must have a copy of a simple object", () => {
        const original = {name: "Mikita", family: ["Papa", "Papa2"]};
        const copy = deepClone(original);

        expect(copy).toEqual(original);
        expect(copy).not.toBe(original);
    });

    it("must copy all properties of nested objects inside original object ", () => {
        const original = {
            name: "Mikita",
            skills: ["ts", "js"],
            project: {
                title: 'ts-core',
                stars: 0
            }
        };

        const copy = deepClone(original);

        copy.skills.push('docker');
        copy.project.stars = 10;

        expect(original.skills).toEqual(['ts', 'js']);
        expect(original.project.stars).toBe(0);

        expect(copy.skills).toEqual(['ts', 'js', 'docker']);
        expect(copy.project.stars).toBe(10);
    });

    it("must copy all objects in nested array in original object", () => {
        const original = [ { id: 1}, { id:2 }];
        const copy = deepClone(original);

        expect(copy).toEqual(original);
        expect(copy[0]).not.toBe(original[0]);
    });

});