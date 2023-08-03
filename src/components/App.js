import { useEffect, useState } from "react";
import CategoriesList from "./CategoriesList";


function App() {
  const [categories, setCategories] = useState ("")

  useEffect(() => {
    fetch ("http://localhost:9292")
      .then(r => r.json())
      .then(setCategories)
  }, [])

  return (
    <div>
      <CategoriesList categories={categories} />
    </div>
  );
}

export default App;
