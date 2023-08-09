import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import CategoryList from "./CategoryList";
import CategoriesForm from "./CategoriesForm";
import AnimalCard from "./AnimalCard";


function App() {
  const [categories, setCategories] = useState ([])

  useEffect(() => {
    fetch ("http://localhost:9292/categories")
      .then(r => r.json())
      .then(setCategories)
  }, [])

  return (
    <div>
      <NavBar />
      <Switch >
        <Route exact path="/" >
          <CategoryList categories={categories} />
        </Route>
        <Route path="/newCategory">
          <CategoriesForm />
        </Route>
        <Route path="/categories/:id">
                    <AnimalCard />
                </Route>
      </Switch>
        
    </div>
    )
}

export default App;
