import { useEffect, useState } from "react";

function CategoriesForm(){
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
        
    //     useEffect(() => {
    //         fetch ("http://localhost:9292/categories", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify()
    //             })
    //           .then(r => r.json())
    //           .then(data => console.log(data))
    //       }, [])
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
                    type="submit">Add Category</button>
                    {/* onSubmit={handleSubmit} */}
            </form>
        </div>
    )
}
export default CategoriesForm