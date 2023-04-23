import { Link } from "react-router-dom";

export default function MyGames({title, img, genres, slug}){
    
    return (
        <article className="mygames-card">
        <Link to={`/mygames/${slug}`} className="link">
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>{genres}</p>
        </Link>
        </article>
    )
}