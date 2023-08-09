import { useState } from "react";

function CategoriesForm({handleAddCategory}){
    const [formData, setFormData] = useState({
        name: "",
        img: ""
})


    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] :e.target.value
    })
    }

    function handleSubmit(e){
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
              .then(category => handleAddCategory(category))
            }


    return (

        <div className="NewCategory" >
            <h2>Add New Category</h2>
            <form>
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
                    name="image" 
                    placeholder="Image URL" />
                <button 
                    type="submit"
                    onSubmit={handleSubmit}
                    >Add Category</button>
            </form>
        </div>
    )
}
export default CategoriesForm