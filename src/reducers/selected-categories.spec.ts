import deepFreeze from "deep-freeze";
import selectedCategoriesReducer from "./selected-categories";
import { SelectedCategories } from "../types";

describe("selectedCategories reducer", () => {
  it("handles ADD action", () => {
    const state: SelectedCategories = [];
    const action = {
      type: "ADD",
      payload: {
        id: "001",
        name: "Item-1",
      },
    };

    deepFreeze(state);
    deepFreeze(action);

    const nextState = selectedCategoriesReducer(state, action);
    expect(nextState).toEqual([
      {
        id: "001",
        name: "Item-1",
      },
    ]);
  });

  it("handles REMOVE action", () => {
    const state = [
      {
        id: "001",
        name: "Item-1",
      },
    ];
    const action = {
      type: "REMOVE",
      payload: {
        id: "001",
        name: "Item-1",
      },
    };

    deepFreeze(state);
    deepFreeze(action);

    const nextState = selectedCategoriesReducer(state, action);
    expect(nextState).toEqual([]);
  });

  it("handles REMOVE_ALL action", () => {
    const state = [
      {
        id: "001",
        name: "Item-1",
      },
      {
        id: "002",
        name: "Item-2",
      },
    ];
    const action = {
      type: "REMOVE_ALL",
      payload: null,
    };

    deepFreeze(state);
    deepFreeze(action);

    const nextState = selectedCategoriesReducer(state, action);
    expect(nextState).toEqual([]);
  });

  it("handles SELECT_ALL_SUB_CATEGORY action", () => {
    const state: SelectedCategories = [];
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

    const nextState = selectedCategoriesReducer(state, action);
    expect(nextState).toEqual([
      {
        id: "001",
        name: "Item-1",
      },
      {
        id: "002",
        name: "Item-2",
      },
    ]);
  });

  it("handles REMOVE_ALL_SUB_CATEGORY action", () => {
    const state: SelectedCategories = [
      {
        id: "001",
        name: "Item-1",
      },
      {
        id: "002",
        name: "Item-2",
      },
      {
        id: "003",
        name: "Item-3",
      },
    ];
    const action = {
      type: "REMOVE_ALL_SUB_CATEGORY",
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

    const nextState = selectedCategoriesReducer(state, action);
    expect(nextState).toEqual([
      {
        id: "003",
        name: "Item-3",
      },
    ]);
  });
});
