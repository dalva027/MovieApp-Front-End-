import './Hero.css';``
import  Carousel  from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
//import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';



const Hero = ({movies}) => {

    const [movie, setMovie] = useState(movies);

    useEffect(() => {
        setMovie(movies);
    }, [movies])

//console.log(movie);

    return(
        <div  className="movie-carousel-container">
            <Carousel infiniteLoop={true} autoPlay={true} cycleNavigation={true}>
                {
                    movie?.map((movie) => {
                        return(
                            <Paper key={movie.id}>
                                <div className="movie-card-container">
                                    <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                        <div className="movie-detail">
                                        <div className="movie-poster">
                                            <img src={movie.poster} alt={movie.title} />
                                        </div>
                                        
                                        <div className="movie-title">
                                            <h2>{movie.title}</h2>
                                        </div>
                                    
                                        
                                               <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                               <FontAwesomeIcon className="play-button" icon={faPlay}/>
                                               </Link>

                                               

                                        
                                        <Link to={`/Reviews/${movie.imdbId}`}>
                                               <Button className="review-button" variant="outline-light" >Reviews</Button>
                                               </Link>

                                        </div>
                                        
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero;