import React from 'react';
import Moive from './PopularMovie'
import '../App.css';
import { Button } from 'react-bootstrap';

const Popular = ({ movies, genres }) => {


  function slideRight() {
    document.getElementById('slideMe').scrollLeft += 850;
  }
  function slideLeft() {
    document.getElementById('slideMe').scrollLeft -= 850;
  }

  function disableScroll() {
    // document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
  }

  function enableScroll() {
    document.body.style.overflow = null;
    let item = document.getElementById('slideMe');
    window.addEventListener('wheel', function (e) {
      if (e.deltaY > 0) item.scrollLeft = 0;
      else item.scrollLeft = 0;
    });

    // window.removeEventListener('wheel', function(e) {
    // if (e.deltaY > 0) item.scrollLeft += 100;
    //   else item.scrollLeft -= 100;
    // });

  }

  function mouseWheel() {
    let item = document.getElementById('slideMe');
    window.addEventListener('wheel', function (e) {
      if (e.deltaY > 0) item.scrollLeft += 200;
      else item.scrollLeft -= 200;
    });
    disableScroll();
  }
  return (
    <div>

      <Button variant="outline-secondary" style={{ float: "left" }}
        onClick={slideLeft}>Left</Button>{''}

      <div id="slideMe" onMouseOver={mouseWheel}
        onMouseLeave={enableScroll}
        className="span11"
        style={{ overflowX: "hidden", scrollBehavior: "smooth" }}>

        <div className="row-fluid">
          {movies.map(movie => (
            <div className="col-lg-3" key={movie.id}>
              <Moive movie={movie} genres={genres} />
            </div>
          ))}
        </div>
      </div>
      <Button variant="outline-secondary" style={{ float: "right" }} onClick={slideRight}>Right</Button>{''}
    </div>
  )
}

export default Popular

