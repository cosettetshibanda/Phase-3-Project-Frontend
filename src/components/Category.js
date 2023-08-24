import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function Category({category}) {


    return(
        <div>
            <div className="project-item">
                <h2>{category.name}</h2>
                <img src={category.img} alt={category.name} />
                <br></br>
                <NavLink to={`/categories/${category.id}`}>See Animals</NavLink>
            </div>
        </div>

    )
}

export default Category




