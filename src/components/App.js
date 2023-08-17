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

  const handleDeleleteCategory = (CategoryToDelete) => {
    const updatedCategories = categories.filter((Category) => Category.id !== CategoryToDelete.id);
    setCategories(updatedCategories);
  }


  function handleAddAnimal(newAnimal) {
    const category = categories.find((category) => category.id === newAnimal.category_id)
    const updatedAnimals = [...category.animals, newAnimal]
    const updatedCategory = {...category, animals: updatedAnimals}
    const updatedCategories = categories.map((c) => {
        if (c.id === category.id) {
            return updatedCategory
        }
        else {
            return c
        }
    })
    setCategories(updatedCategories)    
}


  return (
    <div>
      <NavBar />
      <Switch >
        <Route exact path="/" >
          <CategoryList categories={categories} onDeleteCategory={handleDeleleteCategory} />
        </Route>
        <Route path="/newCategory">
          <CategoriesForm handleAddCategory={handleAddCategory}/>
        </Route>
        <Route path="/categories/:id">
                    <CategoryCard categories={categories} handleAddAnimal={handleAddAnimal}/>
                </Route>
      </Switch>
        
    </div>
    )
}

export default App;


//find category
//add to specific category