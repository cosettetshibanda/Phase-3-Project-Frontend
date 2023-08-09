
import Category from "./Category";

function CategoryList({categories}) {

    const categoryItems = categories.map((category) => (
        <Category
            key={category.id}
            id={category.id}
            name={category.name}
            image={category.img}
        />
    ));
    return (
        <div id="project-list">{categoryItems}</div>
    )
}

export default CategoryList