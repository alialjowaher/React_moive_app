import React from 'react'
import Badge from 'react-bootstrap/Badge';
const Movie = ({ movie, genres }) => {
    const posterBaseUrl = 'http://image.tmdb.org/t/p/w300';

    let movieGenres = movie.genre_ids
    const genresList = genres.filter(x => movieGenres.includes(x.id));

    return (
        <div className="moviePoster">
            {/* <img className="img" src={posterBaseUrl + movie.poster_path} alt={movie.poster_path} /> */}
            <img data-id={movie.id} className="img"
                src={posterBaseUrl + movie.poster_path}
                alt={movie.poster_path} />
            {/* <p>{movie.overview}</p> */}

            {/* <p> {movie.release_date} | {movie.vote_average} | {movie.title}</p> */}

            {/* <div>
                {genresList.map(genre => (
                    <Badge className="mr-1" key={genre.id} variant="secondary" style={{ color: '#ececec' }}>
                        {genre.name}
                    </Badge>


                ))}
            </div> */}

        </div>
    )

}

export default Movie