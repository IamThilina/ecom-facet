import React from "react";
import * as ReactRedux from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import CategoryItemList from "./category-item-list";

jest.spyOn(ReactRedux, "useSelector").mockReturnValue({});
jest.mock("../hooks");

describe("CategoryItemList component", () => {
  let mockedDispatch: jest.Mock;

  beforeEach(() => {
    mockedDispatch = jest.fn();
    jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(mockedDispatch);
  });

  it("display all the children items in the list", () => {
    const { getByText } = render(<CategoryItemList categoryIds={["001", "002"]} />);

    expect(getByText("Item-1 (1)")).toBeVisible();
    expect(getByText("Item-2 (2)")).toBeVisible();
  });

  it("display a toggle with 'Select All' label", () => {
    const { getByText } = render(<CategoryItemList categoryIds={["001", "002"]} />);

    expect(getByText("Select All")).toBeVisible();
  });

  it("check all children category when clicked on 'Select All' switch", () => {
    const { getAllByRole } = render(<CategoryItemList categoryIds={["001", "002"]} />);

    fireEvent.click(getAllByRole("checkbox")[0]);
    expect(mockedDispatch).toBeCalledTimes(1);
    expect(mockedDispatch).nthCalledWith(1, {
      type: "SELECT_ALL_SUB_CATEGORY",
      payload: [
        {
          count: 1,
          id: "001",
          name: "Item-1",
          parent: "000",
        },
        {
          count: 2,
          id: "002",
          name: "Item-2",
          parent: "000",
        },
      ],
    });
  });
});
