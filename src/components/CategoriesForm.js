import { useEffect, useState } from "react";

function CategoriesForm(){
    const [name, setName] = useState("")
    const [img, setImg] = useState("")


    return (

        <div className="NewCategory" >
            <h2>Add New Category</h2>
            <form>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    value={name} 
                    type="text" 
                    name="name" 
                    placeholder="Category name" />
                <input 
                    onChange={(e) => setImg(e.target.value)}
                    value={img} 
                    type="text" 
                    name="image" 
                    placeholder="Image URL" />
                <button type="submit">Add Category</button>
            </form>
        </div>
    )
}
export default CategoriesForm