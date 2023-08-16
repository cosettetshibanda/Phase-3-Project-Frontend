import { useState } from "react";

function CategoriesForm({handleAddCategory}){
    const [formData, setFormData] = useState({
        name: "",
        img: ""
})


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] :e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newCategory = {
            ...formData
        }
    
        fetch ("http://localhost:9292/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCategory)
        })
        .then(r => r.json())
        .then(data => {

            handleAddCategory(data)
        })
    }


    return (

        <div className="NewCategory" >
            <h2>Add New Category</h2>
            <form  onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    value={formData.name} 
                    type="text" 
                    name="name" 
                    placeholder="Category name" />
                <input 
                    onChange={handleChange}
                    value={formData.img} 
                    type="text" 
                    name="img" 
                    placeholder="Image URL" />
                <button 
                    type="submit"
                    >Add Category</button>
            </form>
        </div>
    )
}
export default CategoriesForm