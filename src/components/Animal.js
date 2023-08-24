
function Animal({animal, onDeleteAnimal}) {


    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/animals/${animal.id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => {
            onDeleteAnimal(animal)
        })
    }

    return (
        <div>
            <div className="animal">
                <h3>{animal.name}</h3>
                <img src={animal.img} alt={animal.name} />
            <button className="del-btn" onClick={handleDeleteClick} >
            🗑️
            </button>
            </div>
        </div>

    )
}

export default Animal