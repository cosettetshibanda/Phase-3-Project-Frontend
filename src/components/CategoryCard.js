import AnimalForm from "./AnimalForm"
import Animals from "./Animals";
import {useParams} from "react-router-dom"

function CategoryCard ({categories}) {
    const params = useParams()
    console.log(params)

    const categoryItems = categories.map((category) => (
        <Animals
            key={category.id}
            category={category}
        />
    
    ));
    return (
        <div>
            <div id="Animal-list">{categoryItems}</div>
            <AnimalForm />
        </div>
    )
}

export default CategoryCard
