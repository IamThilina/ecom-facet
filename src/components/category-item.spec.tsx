import React from "react";
import * as ReactRedux from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import CategoryItem from "./category-item";

jest.spyOn(ReactRedux, "useSelector").mockReturnValue({});
jest.mock("../hooks");

describe("CategoryItem component", () => {
  let mockedDispatch: jest.Mock;

  beforeEach(() => {
    mockedDispatch = jest.fn();
    jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(mockedDispatch);
  });

  it("displays the item with name and count", () => {
    const { getByText } = render(<CategoryItem name="Item-1" count={1} id="001" />);

    expect(getByText("Item-1 (1)")).toBeVisible();
  });

  it("doesn't display collapse icon when there are no children categories associated with this item", () => {
    const { queryByTestId } = render(<CategoryItem name="Item-2" count={2} id="002" />);

    expect(queryByTestId("collapse-icon")).toBeNull();
  });

  it("displays a collapse icon when there are children categories associated with this item", () => {
    const { getByTestId } = render(<CategoryItem name="Item-1" count={1} id="001" />);

    expect(getByTestId("collapse-icon")).toBeVisible();
  });

  it("displays the children items with name and count when clicked on collapse icon", () => {
    const { getByTestId, getByText } = render(<CategoryItem name="Item-1" count={1} id="001" />);

    fireEvent.click(getByTestId("collapse-icon"));
    expect(getByText("Item-1 (1)")).toBeVisible();
    expect(getByText("Item-3 (3)")).toBeVisible();
    expect(getByText("Item-4 (4)")).toBeVisible();
  });

  it("displays shrink icon when collapse icon was toggled", () => {
    const { getByTestId } = render(<CategoryItem name="Item-1" count={1} id="001" />);

    fireEvent.click(getByTestId("collapse-icon"));
    expect(getByTestId("shrink-icon")).toBeVisible();
  });

  it("dispatch ADD action when category checkbox is checked", () => {
    const { getByRole } = render(<CategoryItem name="Item-1" count={1} id="001" />);

    fireEvent.click(getByRole("checkbox"));
    // expect(getByRole("checkbox")).toBeChecked();
    expect(mockedDispatch).toBeCalledTimes(1);
    expect(mockedDispatch).nthCalledWith(1, { type: "ADD", payload: { name: "Item-1", id: "001" } });
  });
});
