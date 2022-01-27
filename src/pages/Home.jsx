import React, {useState} from 'react';

import Title from '../components/Title'
import SearchForm from '../components/SearchForm'
import MoviesList from '../components/MoviesList'

const Home = () => {

    const [results, setResults] = useState([])
    const [searchDone, setSearchDone] = useState(false)

    function onResults(results) {
        setResults(results)
        setSearchDone(true)
    }

    function renderResults() {
        return (
            results.length === 0 ? <p>No hay resultados</p> : <MoviesList movies={results} />
        )
    }

    return (<div>
        <Title>Buscador de Peliculas</Title>
        <div className='SearchForm-wrapper'>
            <SearchForm onResults={onResults} />
        </div>
        {searchDone ? renderResults() : <small>Usa el filtro para la búsqueda</small>}
    </div>);
}

export default Home;