import React from 'react';
import Movie from './Movie'
import { Row, Col } from 'react-bootstrap';



const MovieList = ({ movies, genres, title }) => {

  return (

    <Row className="justify-content-md-center">
      <Col>
        {/* <Button variant="outline-dark">Left</Button> */}
      </Col>
      <Col xs={10}>
        <div><div className="vl"><span className="title">{title}</span></div> </div>
        <div className="posterbox">
          {movies.map(movie => (
            <div key={movie.id}>
              <Movie movie={movie} genres={genres} />
            </div>
          ))}
        </div>
      </Col>
      <Col>
        {/* <Button variant="outline-dark">Right</Button> */}
      </Col>
    </Row>
  )




}

export default MovieList

