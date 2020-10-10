import { Categories } from "../types";
import generateCategoryMaps from "./generate-category-maps";

describe("factory method to generate category map from categories", () => {
  const categories: Categories = [
    {
      id: "001",
      count: 1,
      parent: "000",
      name: "Item-1",
    },
    {
      id: "002",
      count: 2,
      parent: "000",
      name: "Item-2",
    },
    {
      id: "003",
      count: 3,
      parent: "001",
      name: "Item-3",
    },
    {
      id: "004",
      count: 4,
      parent: "001",
      name: "Item-4",
    },
    {
      id: "005",
      count: 5,
      parent: "003",
      name: "Item-5",
    },
  ];

  it("generates the category maps accurately based one the provided categories", () => {
    const map = generateCategoryMaps(categories);

    expect(map.categoryMap).toEqual({
      "001": {
        count: 1,
        id: "001",
        name: "Item-1",
        parent: "000",
      },
      "002": {
        count: 2,
        id: "002",
        name: "Item-2",
        parent: "000",
      },
      "003": {
        count: 3,
        id: "003",
        name: "Item-3",
        parent: "001",
      },
      "004": {
        count: 4,
        id: "004",
        name: "Item-4",
        parent: "001",
      },
      "005": {
        count: 5,
        id: "005",
        name: "Item-5",
        parent: "003",
      },
    });
    expect(map.parentMap).toEqual({
      "000": ["001", "002"],
      "001": ["003", "004"],
      "003": ["005"],
    });
  });

  it("returns empty maps empty array of categories are passed", () => {
    const map = generateCategoryMaps([]);

    expect(map.categoryMap).toEqual({});
    expect(map.parentMap).toEqual({});
  });
});
