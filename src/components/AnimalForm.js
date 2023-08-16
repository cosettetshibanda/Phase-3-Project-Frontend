import {useState} from "react"

function AnimalForm({params, handleAddAnimal}){
    const [formData, setFormData] = useState({
        name: "",
        img: "",
        category_id: params.id
    })

    console.log(params)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] :e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newAnimal = {
            ...formData
        }
    
        fetch ("http://localhost:9292/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        })
        .then(r => r.json())
        .then(data => {

            handleAddAnimal(data)
        })
    }

    return(
        <div className="NewAnimal" >
        <h2>Add New Animal</h2>
        <form onSubmit={handleSubmit}>
            <input value={formData.name}  type="text" name="name" placeholder="Animal name" onChange={handleChange} />
            <input value={formData.img} type="text" name="img" placeholder="Image URL" onChange={handleChange} />
            <button type="submit">Add Animal</button>
        </form>
    </div>
    )
}

export default AnimalForm

//use category id to find proper category
//use spread operators