import { Link } from "react-router-dom";

export default function MyFavPage({myfav}){
    return (
        <section className="mygames-page">
            <h2>My Favourite Games - {myfav.length} Games</h2>
        {myfav.map((game, index) => (
            <article key={index} className="myfav-card">
            <Link to={`/game/${game.slug}`} className="link">
            <img src={game.img} alt={game.title}/>
            <h3>{game.title}</h3>
            <p>{game.genres}</p>
            </Link>
        </article>
        ))}
        </section>
        
    )
}