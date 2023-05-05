import { useParams } from "react-router-dom"

export default function GamePage({games}){

    const {link} = useParams()
    const game = games.find((game) => game.slug === link)

    return (
        <section className="mygames-page">
        <article className="mygames-card">
        <h2>{game.title}</h2>
        <img src={game.img} alt={game.title}/>
        <p>{game.title} is a {game.genres} game</p>
        <p>Release date: <strong>{game.released}</strong></p>
        <p>Genres: <strong>{game.genres}</strong></p>
        </article>
        </section>

    )
}