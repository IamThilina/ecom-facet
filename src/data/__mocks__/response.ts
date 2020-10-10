export default {
  data: {
    categories: [
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
    ],
  },
};
