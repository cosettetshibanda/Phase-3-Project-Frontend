import AnimalCard from "./AnimalCard"
import AnimalForm from "./AnimalForm"

function Category({name, img}) {

    return(
        <div>
            <div className="project-item">
                <h3>{name}</h3>
                <p>{img}</p>
            </div>
            <AnimalCard />
            <AnimalForm />
        </div>

    )
}

export default Category
