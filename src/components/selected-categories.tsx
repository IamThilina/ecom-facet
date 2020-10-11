import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import { Store, SelectedCategory } from "../types";

const SelectedCategories = () => {
  const selectedCategories = useSelector(({ selectedCategories: categories }: Store) => categories);
  const dispatch = useDispatch();

  return (
    <div className={`selected-categories ${selectedCategories.length === 0 ? "selected-categories--fixed" : ""}`}>
      {selectedCategories.length > 0 && (
        <>
          <div className="selected-categories__chips-container">
            {selectedCategories.map((category: SelectedCategory) => (
              <Chip
                key={category.id}
                label={category.name}
                className="selected-categories__category-chip"
                onDelete={() => dispatch({ type: "REMOVE", payload: { ...category } })}
              />
            ))}
          </div>
          <Button
            className="selected-categories__remove-all-btn"
            size="small"
            variant="contained"
            onClick={() => dispatch({ type: "REMOVE_ALL" })}
          >
            Remove All
          </Button>
        </>
      )}
    </div>
  );
};

export default SelectedCategories;
