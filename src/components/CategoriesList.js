import CategoriesForm from "./CategoriesForm"
import Category from "./Category"


function CategoriesList({categories}) {
    return (
    <div>
        <h1>Categories</h1>
        <Category />
        <CategoriesForm />
    </div>
    )
    
}

export default CategoriesList