import React, { useState } from 'react'
import { OmdbAPI } from '../services/OmdbAPI'
const SearchForm = (props) => {

    const {onResults} = props

    const [searchValue, setSearchValue] = useState("")

    function onChangeSearchValue(e) {
        setSearchValue(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()

        OmdbAPI.searchMovies(searchValue)
            .then(results => {
                const {Search = []} = results
                onResults(Search)
            })
    }
    return (
        <form onSubmit={onSubmit} >
            <div className="field has-addons">
                <div className="control">
                    <input className="input" onChange={onChangeSearchValue} type="text" placeholder="Pelicula a buscar..." />
                </div>
                <div className="control">
                    <button className="button is-info">Buscar</button>
                </div>
            </div>
        </form>
    )
}

export default SearchForm