import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function Category({category, onDeleteCategory}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/categories/${category.id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => {
            onDeleteCategory(category)
        })
    }

    return(
        <div>
            <div className="project-item">
                <img src={category.img} alt={category.name} />
                <br></br>
                <NavLink to={`/categories/${category.id}`}>See Animals</NavLink>
            </div>
            <button className="del-btn" onClick={handleDeleteClick}>
                Delete Category
            </button>
        </div>

    )
}

export default Category




