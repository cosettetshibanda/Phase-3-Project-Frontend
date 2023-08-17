import AnimalForm from "./AnimalForm"
import {useParams} from "react-router-dom"
import Animal from "./Animal";
import { useEffect, useState } from "react";

function CategoryCard ({categories, handleAddAnimal}) {
    const params = useParams()
    const [selectedCategory, setSelectedCategory] = useState({
        animals: []
    })

    useEffect(() => {
        const category = categories.find((category) => category.id === parseInt(params.id))
        if(category){
            setSelectedCategory(category)
        }
    }, [categories])

    const animals = selectedCategory.animals.map((animal) =>(

        <Animal
            key={animal.id}
            animal={animal}
        />
    ))
        
    return (
        <div>
            <div id="Animal-list">{animals}</div>
            <AnimalForm params={params} handleAddAnimal={handleAddAnimal} />
        </div>
    )
}

export default CategoryCard

//find category where the id matches params
//map through the animals to get name and img