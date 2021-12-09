import {FC, useState} from 'react';
import {Container} from "react-bootstrap";
import {FaBars, FaSearch, FaStar, FaThLarge} from "react-icons/all";

import AppHeader from "./components/AppHeader";
import AppMainContent from "./components/AppMainContent";
import AppFooter from "./components/AppFooter";

import rapid_searchByTitle_testData from './testData/SearchByTitle.json';

interface rapid_searchByTitle_movie {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}
interface rapid_searchByTitle_json {
    Search?: rapid_searchByTitle_movie[],
    totalResults?: string,
    Response?: string,
}

interface keyValueIcon {
    key: string,
    value: string,
    icon: any
}

interface movie {
    title: string,
    year: string,
    poster: string,
    imdbID: string
}

const rawResponse: rapid_searchByTitle_json = rapid_searchByTitle_testData;


const App: FC = () => {

    // init to empty
    const [favouritesList, setFavouritesList] = useState(() => [])

    const listLayoutOptions: keyValueIcon[] = [
        {
            key: 'list',
            value: 'List View',
            icon: <FaBars />
        },
        {
            key: 'grid',
            value: 'Grid View',
            icon: <FaThLarge />
        },
    ]
    // init to 'list', not 'grid'
    const [currentListLayout, setCurrentListLayout] = useState(() => listLayoutOptions[0].key)

    const listOptions: keyValueIcon[] = [
        {
            key: 'search',
            value: 'Search Results',
            icon: <FaSearch />
        },
        {
            key: 'favourites',
            value: 'My Favourites',
            icon: <FaStar />
        }
    ]
    // init to 'search', not 'favourites'
    const [visibleList, setVisibleList] = useState(() => listOptions[0].key)

    // normalize / populate with test data
    const movieList: movie[] = (rawResponse.Search || []).map((value: rapid_searchByTitle_movie): movie => {
        return {
            title: value.Title || '',
            year: value.Year || '',
            poster: value.Poster || '',
            imdbID: value.imdbID
        }
    })

    return (

        <Container fluid className={`m-0 p-0 bg-${visibleList === 'search' ? 'light' : 'warning'}`}>

            <AppHeader
                currentListLayout={currentListLayout}
                setCurrentListLayout={setCurrentListLayout}
                listLayoutOptions={listLayoutOptions}

                visibleList={visibleList}
                setVisibleList={setVisibleList}
                listOptions={listOptions}
            />

            <AppMainContent

                // Way too complicated reverse lookup to find value 'Search Results' from key 'search' !
                listTitle={listOptions.filter(item => item.key === visibleList)[0].value}

                listContent={visibleList === 'search' ? movieList : favouritesList}
                addFavourite={setFavouritesList}
            />


            <AppFooter/>

        </Container>
    );
};

export default App;
