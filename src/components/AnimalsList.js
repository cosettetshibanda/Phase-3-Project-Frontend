import Animal from "./Animal"

function AnimalsList({category}) {

    const findAnimals = category.animals.map((animal) => (
            <Animal 
            key={animal.id}
            animal={animal}
            />
        ))
        
    return (
        <div>
         
            {<div id="Animal">{findAnimals}</div>}
        </div>
    )
}
export default AnimalsList