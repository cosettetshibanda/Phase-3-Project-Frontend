import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function Category({category, onDeleteCategory}) {

    const handleDeleteClick = () => {
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
                <h3>{category.name}</h3>
                <img src={category.img} alt={category.name} />
                <br></br>
                <NavLink to={`/categories/${category.id}`}>See Animals</NavLink>
            <button className="del-btn" onClick={handleDeleteClick}>
            🗑️
            </button>
            </div>
        </div>

    )
}

export default Category




