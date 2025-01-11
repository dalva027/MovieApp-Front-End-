import './Hero.css';``
import  Carousel  from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { useEffect, useState } from 'react';



const Hero = ({movies}) => {

    const [movie, setMovie] = useState(movies);

    useEffect(() => {
        setMovie(movies);
    }, [movies])

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