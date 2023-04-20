import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div id="container">
          <header>
            <Link to="/"><h1 className="header">GameHub</h1></Link>
            <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/gameshop">Shop</Link></li>
                  <li><Link to="/mygames">My Games</Link> </li>
                  <li><Link to="/favourites">Favourites</Link></li>
                </ul>
            </nav>
            
            
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
  
          </footer>
        </div>
    )
}