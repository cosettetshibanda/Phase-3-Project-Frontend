import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import CategoriesForm from "./CategoriesForm";
import Category from "./Category";


function App() {
  const [categories, setCategories] = useState ("")

  useEffect(() => {
    fetch ("http://localhost:9292/categories")
      .then(r => r.json())
      .then(setCategories)
  }, [])

  return (
    <div>
        <h1>Categories</h1>
        
        <Category />
        <CategoriesForm />
    </div>
    )
}

export default App;
