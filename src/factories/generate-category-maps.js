/*
* generate two distinct maps of categories and parents,
* so that we can easily traverse the category graph using them
* */
export default (categories) => {
    const categoryMap = {};
    const parentMap = {};

    categories.forEach((category) => {
        if(parentMap[category.parent])
            parentMap[category.parent].push(category.id);
        else{
            parentMap[category.parent] = []
            parentMap[category.parent].push(category.id);
        }
        categoryMap[category.id] = {
            name: category.name,
            count: category.count,
            parent: category.parent,
        }
    });

    return {
        categoryMap,
        parentMap
    }
}