import AnimalCard from "./AnimalCard"
import AnimalForm from "./AnimalForm"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

function Category({name, img, id}) {

    return(
        <div>
            <div className="project-item">
                <h3>{name}</h3>
                <p>{img}</p>
                <NavLink to={`/categories/${id}`}>See Animals</NavLink>
            </div>
            <AnimalCard />
            <AnimalForm />
        </div>

    )
}

export default Category
