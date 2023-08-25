import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import CategoryList from "./CategoryList";
import CategoriesForm from "./CategoriesForm";
import CategoryCard from "./CategoryCard";


function App() {
  const [categories, setCategories] = useState ([])

  useEffect(() => {
    fetch ("http://localhost:9292/categories")
      .then(r => r.json())
      .then(setCategories)
  }, [])

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  }


  function handleDeleteAnimal(animal) {
    const category = categories.find((category) => category.id === animal.category_id)
    const updatedAnimals = category.animals.filter((a) => a.id !==animal.id);
    const updatedCategories = categories.map((c) => c.id === category.id ? {...category, animals: updatedAnimals} : c)
  
    setCategories(updatedCategories)
}
  

  function handleUpdateAnimal(updatedAnimal) {
    const category = categories.find((category) => category.id === updatedAnimal.category_id)
    const updatedAnimals = category.animals.map((animal) =>animal.id === updatedAnimal.id ? updatedAnimal : animal)
    const updatedCategories = categories.map((c) => c.id === category.id ? {...category, animals: updatedAnimals} : c)
  
    setCategories(updatedCategories)    
}

function handleAddAnimal(newAnimal) {
  const category = categories.find((category) => category.id === newAnimal.category_id)
  const updatedAnimals = [...category.animals, newAnimal]
  const updatedCategories = categories.map((c) => c.id === category.id ? {...category, animals: updatedAnimals} : c)

  setCategories(updatedCategories)    
}


  return (
    <div>
      <NavBar />
      <Switch >
        <Route exact path="/" >
          <CategoryList categories={categories}  />
        </Route>
        <Route path="/newCategory">
          <CategoriesForm handleAddCategory={handleAddCategory}/>
        </Route>
        <Route path="/categories/:id">
                    <CategoryCard onDeleteAnimal={handleDeleteAnimal} categories={categories} handleAddAnimal={handleAddAnimal} handleUpdateAnimal={handleUpdateAnimal} />
                </Route>
      </Switch>
        
    </div>
    )
}

export default App;


//find category
//add to specific category