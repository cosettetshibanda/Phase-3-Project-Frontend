import { NavLink } from "react-router-dom/cjs/react-router-dom.min"


function NavBar() {
    return (
        <div
        style={{
          borderBottom: "2px solid black",
          paddingBottom: "10px",
          marginBottom: "12px",
        }}
      >
        <NavLink style={{ marginRight: "10px" }} to="/">
          Categories
        </NavLink>
        <NavLink style={{ marginRight: "10px" }} to="/newCategory">
          New Category
        </NavLink>
      </div>
    )
}

export default NavBar