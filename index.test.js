const sum = (a, b) => {
    if (a !== "number" || b !== "number") {
        return NaN;
    }
    return a+b;
}


describe("Summa", () => {
    test("function is defined", () => {
        expect(sum).toBeDefined();
    })

    test("rreturn a number", () => {
        expect(typeof sum(1, 2)).toBe("number");
    })

    test()
})