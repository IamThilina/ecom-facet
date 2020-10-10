import deepFreeze from "deep-freeze";
import categoryStatusReducer from "./category-status";

describe("categoryStatus reducer", () => {
  it("handles ADD action", () => {
    const state = {};
    const action = {
      type: "ADD",
      payload: {
        id: "001",
        name: "Item-1",
      },
    };

    deepFreeze(state);
    deepFreeze(action);

    const nextState = categoryStatusReducer(state, action);
    expect(nextState).toEqual({
      "001": true,
    });
  });

  it("handles REMOVE action", () => {
    const state = {
      "001": true,
    };
    const action = {
      type: "REMOVE",
      payload: {
        id: "001",
        name: "Item-1",
      },
    };

    deepFreeze(state);
    deepFreeze(action);

    const nextState = categoryStatusReducer(state, action);
    expect(nextState).toEqual({
      "001": false,
    });
  });

  it("handles REMOVE_ALL action", () => {
    const state = {
      "001": true,
      "002": true,
    };
    const action = {
      type: "REMOVE_ALL",
      payload: null,
    };

    deepFreeze(state);
    deepFreeze(action);

    const nextState = categoryStatusReducer(state, action);
    expect(nextState).toEqual({});
  });

  it("handles SELECT_ALL_SUB_CATEGORY action", () => {
    const state = {};
    const action = {
      type: "SELECT_ALL_SUB_CATEGORY",
      payload: [
        {
          id: "001",
          name: "Item-1",
        },
        {
          id: "002",
          name: "Item-2",
        },
      ],
    };

    deepFreeze(state);
    deepFreeze(action);

    const nextState = categoryStatusReducer(state, action);
    expect(nextState).toEqual({
      "001": true,
      "002": true,
    });
  });
});
