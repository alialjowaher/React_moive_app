import React from  'react'

const Movie = ({movie,genres}) => {
    const posterBaseUrl = 'http://image.tmdb.org/t/p/w300'
    // let movieGenres = movie.genre_ids
    // const genresList = genres.filter(x => movieGenres.includes(x.id));
//185.3×274.233

    return(
        <div>

           <img className="img" 
           style={{width:"186px",height:"274px"}}
           src={posterBaseUrl + movie.poster_path} 
           alt={movie.poster_path} />
          <div
          style={{ wordBreak:"break-all"}}
          ><p> {movie.title} </p> <p>{movie.vote_average}  |  {movie.release_date} </p> </div>
        {/* <p>{movie.overview}</p>
        <h4>Rating : {movie.vote_average}</h4>
        <p>Release Date : {movie.release_date}</p>
        <div>
        {genresList.map(genre => (
             <Badge className="mr-1" key={genre.id} variant="secondary">
                {genre.name}
            </Badge>
            ))}
        </div> */}

            
        </div>
    )
  }

export default Movie