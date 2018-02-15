import { camelCase, capitalize, searchList } from "./helpers";

describe("Testing camelCase function", () => {
  test("foo bar becomes fooBar", () => {
    expect(camelCase("foo bar")).toBe("fooBar");
  });
  test("FOO BAR becomes fooBar", () => {
    expect(camelCase("foo bar")).toBe("fooBar");
  });
  test('x nN foo bar becomes xNnFooBar"', () => {
    expect(camelCase("x nN foo bar")).toBe("xNnFooBar");
  });
  test("!--foo-¿?-bar--121-**% bar becomes fooBar121", () => {
    expect(camelCase("!--foo-¿?-bar--121-**%")).toBe("fooBar121");
  });
});

describe("Testing searchList function", () => {
  test("Search list", () => {
    const list = [
      {
        name: "laundry",
        displayName: "Laundry"
      },
      {
        name: "dryCleaning",
        displayName: "Dry Cleaning"
      },
      {
        name: "grocerries",
        displayName: "Grocerries"
      }
    ];
    const result = [
      {
        name: "laundry",
        displayName: "Laundry"
      }
    ];
    expect(searchList(list, 'laund')).toEqual(result);
  });
});
