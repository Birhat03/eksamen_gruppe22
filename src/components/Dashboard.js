import GameShop from "./GameShop"
import MyFavourites from "./MyFavourites"
import MyGames from "./MyGames"
import { Link } from "react-router-dom";

export default function Dashboard({store, mygames, myfav}){
    
    return (
    <>
    <div id="gshop-header">
    <h2>GameShop</h2>
    <Link to="/gameshop" className="button">Visit Shop</Link>
    </div>
        <section className="gameshop-view">
            {store.slice(0, 3).map((game, index) => (<GameShop key={index} title={game.title} img={game.img} genres={game.genres} link={game.link}/>))}
        </section>

    
        <section className="mygames-view">
                <h2>My Games-Library - {mygames.length} Games</h2>
                {mygames.slice(0, 4).map((game, index) => (<MyGames key={index} title={game.title} img={game.img} genres={game.genres} slug={game.slug}/>))}
                <Link to="/mygames" className="button">Go To Library</Link>
        </section>
    
        <aside className="myfav-view">
            <h2>My Favourite Games - {myfav.length} Games</h2>
            {myfav.slice(0, 2).map((game, index) => (<MyFavourites key={index} title={game.title} img={game.img} genres={game.genres} slug={game.slug}/>))}
            <Link to="/favourites" className="button">Go To Favourites</Link>
         </aside>

    </>
    )
}