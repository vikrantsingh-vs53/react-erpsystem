import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function navbar(){
  //  const path = window.location.pathname 
    return (
    <nav className="nav">

         <Link to="/" className="site-title">
             ERP
         </Link>

      <ul>
        <CustomLink to="/product">Product </CustomLink>
        <CustomLink to="/orders">Orders </CustomLink>
      </ul>

    </nav>
    )
}

function CustomLink({ to, children, ...props}){
    const resolvedPath =  useResolvedPath(to) 
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
            {children}
          </Link>
        </li>
    )
}