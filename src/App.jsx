import React from "react";
import services from "./services";

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [categories, setCategories] = React.useState([]);
  const [rootId, setRootId] = React.useState(null);

  React.useEffect(() => {

   const getCategories = async ()=> {
     const result = await services.getCategories();
     setCategories(result.categories);
     setRootId(result.rootId);
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
