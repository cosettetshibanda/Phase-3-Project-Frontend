import { useEffect, useState } from "react";
import Categories from "./Categories";


function App() {
  const [categories, setCategories] = useState ("")

  useEffect(() => {
    fetch ("http://localhost:9292")
      .then(r => r.json())
      .then(setCategories)
  }, [])

  return (
    <div>
      <Categories categories={categories} />
    </div>
  );
}

export default App;
