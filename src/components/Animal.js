import {useState} from "react"

function Animal({animal, onDeleteAnimal, handleUpdateAnimal}) {
const [updateImg, setUpdateImg] = useState("")

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/animals/${animal.id}`, {
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => {
            onDeleteAnimal(animal)
        })
    }


    const handleChange = (e) => {
        setUpdateImg(e.target.value)
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch(`http://localhost:9292/animals/${animal.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({img: updateImg}),
        })
          .then((r) => r.json())
          .then((updatedAnimal) => handleUpdateAnimal(updatedAnimal))
          setUpdateImg("")
      }


    return (
        <div>
            <div className="animal">
                <h3>{animal.name}</h3>
                <img src={animal.img} alt={animal.name} />
                <form onSubmit={handleSubmit}>
                    <input value={updateImg} type="text" name="img" placeholder="Image URL" onChange={handleChange} />
                    <button type="submit">Edit Image</button>
                </form>
            <button className="del-btn" onClick={handleDeleteClick} >
            🗑️
            </button>
            </div>
        </div>

    )
}

export default Animal