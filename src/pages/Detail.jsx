import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ButtonBackToHome from '../components/ButtonBackToHome';
import { OmdbAPI } from '../services/OmdbAPI'

const Detail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        console.log('use effect')
        OmdbAPI.searchMovieById(id).then(res => { console.log(res); setMovie(res) })
    }, [])

    function renderMovie() {
        return (
            movie === null ? <p>Cargando...</p> :
                <div className="columns">
                    <div className="column">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{movie.Title}</p>
                                <p className="subtitle is-6">{movie.Year}</p>
                            </div>
                        </div>

                        <div className="content">
                            <p>{movie.Plot}</p>

                            <br />
                            <p>Actores: {movie.Actors}</p>

                            <p>Genero: {movie.Genre}</p>
                            <time >{movie.Released}</time>
                        </div>
                    </div>
                    <div className="column">
                    <figure className="image is-3by2">
                        <img className="is-rounded" src={movie.Poster} alt={movie.Title}/>
                        </figure>
                       
                    </div>
                </div>
        )
    }

    return (
        <>
            {console.log('return')}
            {console.log(movie)}
            <ButtonBackToHome />
            <br/>
            <br/>
            {renderMovie()}
        </>
    )
}

export default Detail;