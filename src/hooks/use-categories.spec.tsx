import * as React from "react";
import { renderHook } from "@testing-library/react-hooks";
import CategoriesProvider from "../providers/categories-provider";
import useCategories from "./use-categories";

jest.mock("../services");
jest.mock("../factories");

describe("useCategories hook", () => {
  it("throws an error when used outside the categories-provider", () => {
    try {
      renderHook(() => useCategories());
    } catch (error) {
      expect(error).toEqual("useProperty must be used within a PropertyProvider");
    }
  });

  it("returns category maps when used with in categories-provider", async () => {
    const wrapper = ({ children }: any) => <CategoriesProvider>{children}</CategoriesProvider>;
    const { result, waitForNextUpdate } = renderHook(() => useCategories(), { wrapper });

    await waitForNextUpdate();

    expect(result.current).toEqual({
      categoryMap: {
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
      },
      parentMap: {
        "000": ["001", "002"],
        "001": ["003", "004"],
        "003": ["005"],
      },
      rootId: "0",
    });
  });
});
