import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CategoriesForm from "./CategoriesForm";
import Category from "./Category";
import { Route, Switch } from "react-router-dom";


function App() {
  const [categories, setCategories] = useState ("")

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
        <h1>Categories</h1>
        </Route>
      </Switch>
        
        <Category />
        <CategoriesForm />
    </div>
    )
}

export default App;
