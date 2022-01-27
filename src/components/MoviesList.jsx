import React from 'react';
import Movie from './Movie'

const MoviesList = (props) => {
    const { movies } = props
    return (
        <div className='MoviesList'>
            {
                movies.map(movie => {
                    return (
                        <div className='MoviesList-item' key={movie.imdbID}>
                            <Movie
                                id={movie.imdbID}
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster} />
                        </div>
                    )
                })
            }
        </div>
    )

}

export default MoviesList