import React from "react";
import services from "./services";

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {

   const getCategories = async ()=> {
     const result = await services.getCategories();
     setCategories(result);
     setIsLoading(false);

   }

   getCategories();
  }, [])

  return <div>
    <h1>Otrium Challenge</h1>
    {
      isLoading ? "Loading . . ." :
          categories.map((category) => <div >{category.name}</div>)
    }
  </div>
};
