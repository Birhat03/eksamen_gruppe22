import { Link } from "react-router-dom"

export default function GameShop({title, img, genres, link}){

    return (
        <article className="gameshop-card">
            <Link to={link} className="link">
                <img src={img} alt={title}/>
                <h3>{title}</h3>
                <p>{genres}</p>
            </Link>
            <Link to={link} className="button">Buy</Link>
        </article>
    )
}