
import Category from "./Category";

function CategoryList({categories, onDeleteCategory}) {

    const categoryItems = categories.map((category) => (
        <Category
            key={category.id}
            category={category}
            onDeleteCategory={onDeleteCategory}
        />
    ));
    return (
        <div id="project-list">{categoryItems}</div>
    )
}

export default CategoryList