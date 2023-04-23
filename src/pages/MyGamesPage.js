import { Link } from "react-router-dom";

export default function MyGamesPage({mygames}){
    
    return (
        <section className="mygames-page">
            <h2>My Games-Library - {mygames.length} Games</h2>
            {mygames.map((game, index) => (
                <article key={index} className="mygames-card">
                <Link to={`/mygames/${game.slug}`} className="link">
                <img src={game.img} alt={game.title}/>
                <h3>{game.title}</h3>
                <p>{game.genres}</p>
                </Link>
            </article>
            ))}
        </section>
        
    )
}