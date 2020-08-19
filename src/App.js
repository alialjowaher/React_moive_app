import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap/'
// import PopularList from './components/PopularList'
import MovieList from './components/MoviesList'

import Header from './components/Header'

function App() {
  //state settings
  const [Popularmovies, setPopularMovies] = useState([])
  const [Upcomingmovies, setUpcomningMovies] = useState([])
  const [Topratedgmovies, setTopratedMovies] = useState([])
  const [Genre, setGenre] = useState([])

  // data fetching using hooks

  useEffect(() => {
    // const BASE_URL = 'https://api.themoviedb.org/3/movie';
    const API_KEY = process.env.REACT_APP_Movies_API_KEY;
    const PopualrApiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY + '&language=en-US&page=1'
    const UpcomingApiUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY + '&language=en-US&page=1'
    const TopRatedApiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1'
    const Genre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY + '&language=en-US'

    function getPopularMovies() {
      axios.get(PopualrApiUrl).then((response) => {
        const allRespons = response.data;
        console.log(allRespons.results)
        setPopularMovies(allRespons.results)

      })
    }

    function getUpcomingMovies() {
      axios.get(UpcomingApiUrl).then((response) => {
        const allRespons = response.data;
        setUpcomningMovies(allRespons.results)
      })
    }

    function getTopRatedMovies() {
      axios.get(TopRatedApiUrl).then((response) => {
        const allRespons = response.data;
        setTopratedMovies(allRespons.results)
      })
    }

    function getGenre() {
      axios.get(Genre).then((response) => {
        const allRespons = response.data;
        // console.log(allRespons.genres)
        setGenre(allRespons.genres)
      })
    }
    // call all apis 
    getPopularMovies()
    getUpcomingMovies()
    getTopRatedMovies()
    getGenre()
  }, []);


  return (
    <Container fluid>
      <Header />
      <Row>
        <Col></Col>
        <Col xs={12}>
          <MovieList movies={Popularmovies} genres={Genre} title="Popular Movies" />
          <MovieList movies={Upcomingmovies} genres={Genre} title="Upcoming Movies" />
          <MovieList movies={Topratedgmovies} genres={Genre} title="Top Rated Movies" />
        </Col>
        <Col></Col>
      </Row>

    </Container>
  );
}

export default App;
