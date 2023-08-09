import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function Category({name, img, id}) {

    return(
        <div>
            <div className="project-item">
                <h3>Categories</h3>
                <img src={img} alt={name} />
                <br></br>
                <NavLink to={`/categories/${id}`}>See Animals</NavLink>
            </div>
          
        </div>

    )
}

export default Category
