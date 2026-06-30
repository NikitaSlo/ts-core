import { groupBy } from "./groupBy";
import { describe, it, expect } from "@jest/globals";

describe("groupBy", () => {
  interface User {
    name: string;
    age: number;
    role: string;
  }

  const users: User[] = [
    { name: "Alice", age: 25, role: "admin" },
    { name: "Bob", age: 30, role: "user" },
    { name: "Charlie", age: 25, role: "user" },
  ];

  it("a key that is a number type", () => {
    const result = groupBy(users, "age");

    expect(result).toEqual({
      "25": [
        { name: "Alice", age: 25, role: "admin" },
        { name: "Charlie", age: 25, role: "user" },
      ],
      "30": [{ name: "Bob", age: 30, role: "user" }],
    });
  });

  it("must return empty object by empty array", () => {
    expect(groupBy([], 'name')).toEqual({});
  });   

});
