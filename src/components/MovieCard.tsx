import {FC} from "react";
import {Card, Image} from "react-bootstrap";

import './MovieCard.css'

interface iMovieCard {
    title: string,
    year: string,
    poster: string,
};

// const notYetImplemented = (event: any) => {
//     event.preventDefault()
//     window.alert('NOT IMPLEMENTED YET')
// }

const MovieCard: FC<iMovieCard> = (props: iMovieCard) => {
    return (
        <Card className="my-2 d-flex flex-row flex-grow-0 flex-shrink-0" style={{maxHeight: 'min-content'}}>
            <Card.ImgOverlay className="d-flex flex-col flex-fill flex text-light align-items-baseline darkenCardImg px-1 px-sm-1 px-md-2 px-lg-3 w-100">
                <h1 className="h3 ml-2 mr-3 flex-grow-1 text-nowrap text-truncate">{props.title}</h1>
                <h3 className="h6 ml-3 mr-2">{props.year}</h3>
            </Card.ImgOverlay>
            <Image fluid src={props.poster} className="card-img" style={{width: '100%', height: '260px', objectFit: 'cover'}}/>
        </Card>
    );
};


export default MovieCard;