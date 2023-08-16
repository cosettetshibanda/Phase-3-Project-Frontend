import AnimalForm from "./AnimalForm"
import AnimalsList from "./AnimalsList";
import {useParams} from "react-router-dom"

function CategoryCard ({categories, handleAddAnimal}) {
    const params = useParams()

    const categoryItems = categories.map((category) => (
        <AnimalsList
            key={category.id}
            category={category}
            params={params}
        />
    
    ));
    return (
        <div>
            <div id="Animal-list">{categoryItems}</div>
            <AnimalForm params={params} handleAddAnimal={handleAddAnimal} />
        </div>
    )
}

export default CategoryCard
