const fakeCategoryMap = {
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
};
const fakeParentMap = {
  "000": ["001", "002"],
  "001": ["003", "004"],
  "003": ["005"],
};

const generateCategoryMaps = jest.fn(() => ({
  categoryMap: fakeCategoryMap,
  parentMap: fakeParentMap,
}));

export default {
  generateCategoryMaps,
};
