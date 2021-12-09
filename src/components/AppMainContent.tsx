import {FC} from "react";
import {Col, Container, Row} from "react-bootstrap";

import MovieCard from "./MovieCard";
import './MovieCard.css';

interface movie {
    title: string,
    year: string,
    poster: string,
    imdbID: string
}

interface iMainContent {
    listTitle: string,
    listContent: movie[],
    addFavourite?: any
}

const AppMainContent: FC<iMainContent> = (props) => {
    return (
        <Container className="shadow bg-white py-3" >
            <Col as="section" id="list-of-movies" xs={12} className="mx-0 px-1 px-md-3 px-lg-3 text-center">
                <h1 className=" mb-3">{props.listTitle}</h1>
                <Row as="ul" xs={1} sm={2} md={2} lg={2} xl={3} xxl={4} className="list-unstyled text-center d-flex" >
                    {
                        props.listContent.map((value, index) => (
                                    // do we need a uuid for the key / id ?
                                    <Col as="li"
                                         onClick={(event: any) => {
                                            props.addFavourite(event.currentTarget.id)
                                         }}
                                         id={String(value.imdbID)} key={String(value.imdbID)}
                                         xs={12} md={6} xl={4} xxl={3} className="mx-auto mx-md-0 px-2 px-sm-2 px-md-3 px-lg-4 " >
                                        <MovieCard title={value.title} year={value.year} poster={value.poster} />
                                    </Col>
                            )
                        )
                    }
                </Row>
            </Col>
        </Container>
    )
}

export default AppMainContent
