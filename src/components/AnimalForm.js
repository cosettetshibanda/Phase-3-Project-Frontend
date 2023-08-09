function AnimalForm(){
    return(
        <div className="NewAnimal" >
        <h2>Add New Animal</h2>
        <form>
            <input  type="text" name="name" placeholder="Animal name" />
            <input type="text" name="image" placeholder="Image URL" />
            <input type="text" name="category" placeholder="Category" />
            <button type="submit">Add Animal</button>
        </form>
    </div>
    )
}

export default AnimalForm