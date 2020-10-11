import React from "react";
import { render, waitFor } from "@testing-library/react";
import { useCategories } from "../hooks";
import CategoriesProvider from "./categories-provider";

jest.mock("../services");
jest.mock("../factories");

const CategoriesConsumer: React.FunctionComponent = () => {
  const { categoryMap } = useCategories();

  return <div>{categoryMap && categoryMap!["001"].name}</div>;
};

describe("CategoriesProvider component", () => {
  it("provides the category maps context when used with in the categories provider", async () => {
    const { getByText } = render(
      <CategoriesProvider>
        <CategoriesConsumer />
      </CategoriesProvider>,
    );

    await waitFor(() => expect(getByText("Item-1")).toBeVisible());
  });
});
