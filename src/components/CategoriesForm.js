function CategoriesForm(){
    return (

        <div className="NewCategory" >
            <h2>Add New Category</h2>
            <form>
                <input  type="text" name="name" placeholder="Category name" />
                <input type="text" name="image" placeholder="Image URL" />
                <button type="submit">Add Category</button>
            </form>
        </div>
    )
}
export default CategoriesForm