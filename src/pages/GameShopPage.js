import { Link } from "react-router-dom"

export default function GameShopPage({store}){

    return (
        <>
        <h2>GameShop</h2>
        <section className="gameshop-view">
       {store.map((game, index) => (
            <article key={index} className="gameshop-card">
                <Link to={game.link} className="link">
                    <img src={game.img} alt={game.title}/>
                    <h3>{game.title}</h3>
                    <p>{game.genres}</p>
                </Link>
                <Link to={game.link} className="button">Buy</Link>
        </article>
    
        ))} 
        </section>
        </>
        
    )
}