import { Link } from "react-router-dom";

export default function MyFavourites({title, img, genres, slug}){

    return (
        <article className="myfav-card">
        <Link to={`/game/${slug}`} className="link">
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>{genres}</p>
        </Link>
        </article>
    )
}