
import Category from "./Category";

function CategoryList({categories}) {

    const categoryItems = categories.map((category) => (
        <Category
            key={category.id}
            category={category}
        />
    
    ));
    return (
        <div id="project-list">{categoryItems}</div>
    )
}

export default CategoryList