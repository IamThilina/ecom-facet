import React from "react";
import { render, fireEvent } from "@testing-library/react";
import * as ReactRedux from "react-redux";
import { SelectedCategories as Categories } from "../types";
import SelectedCategories from "./selected-categories";

jest.mock("../hooks");

describe("SelectedCategories component", () => {
  const selectedCategories: Categories = [
    {
      id: "003",
      name: "Item-3",
    },
    {
      id: "004",
      name: "Item-4",
    },
  ];
  let mockedDispatch: jest.Mock;

  beforeEach(() => {
    mockedDispatch = jest.fn();
    jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(mockedDispatch);
    jest.spyOn(ReactRedux, "useSelector").mockReturnValue(selectedCategories);
  });

  it("display a hint when there are no selected categories", () => {
    jest.spyOn(ReactRedux, "useSelector").mockReturnValue([]);
    const { getByText } = render(<SelectedCategories />);

    expect(getByText("No Categories Selected")).toBeVisible();
  });

  it("displays all the selected categories", () => {
    const { getByText } = render(<SelectedCategories />);

    expect(getByText("Item-3")).toBeVisible();
    expect(getByText("Item-4")).toBeVisible();
  });

  it("displays 'Remove All' button when there are selected categories", () => {
    const { getByRole } = render(<SelectedCategories />);

    expect(getByRole("button", { name: "Remove All" })).toBeVisible();
  });

  it("dispatch REMOVE_ALL action when clicked on 'Remove All' button", () => {
    const { getByRole } = render(<SelectedCategories />);

    fireEvent.click(getByRole("button", { name: "Remove All" }));
    expect(mockedDispatch).toBeCalledTimes(1);
    expect(mockedDispatch).nthCalledWith(1, { type: "REMOVE_ALL" });
  });
});
