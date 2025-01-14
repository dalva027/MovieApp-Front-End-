import { useEffect,useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ReviewForm } from '../reviewForm/ReviewForm';

import React from 'react';

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {
    const revText = useRef(); // to get the value of the input field
    let params = useParams(); // to get the movie id from the url
    const movieId = params.movieId; // to get the movie id from the url

    useEffect(() => { // to get the movie data
        getMovieData(movieId);
    }, [])

    const addReview = async (e) => { // to add a review
        e.preventDefault();
        try {
            const rev = revText.current.value;
            const response = await api.post(`/api/v1/reviews`, {reviewBody: rev, imdbId: movieId});
            console.log(response.data);

            const updatedReviews = [...reviews, {body:rev.value}];

            revText.current.value = "";

            setReviews([updatedReviews]);
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <Container>
            <Row>
                <Col>
                    <h1>{movie?.title}</h1>
                    <p>{movie?.description}</p>
                </Col>
                <Col>
                    <h2>Reviews</h2>
                    {
                        reviews?.map((review) => {
                            return(
                                <div key={review.id}>
                                    <p>{review.body}</p>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <ReviewForm handleSubmit={addReview} revText={revText} labeltext="Write A Review" defaultValue="" />
                </Col>
            </Row>
        </Container>
    )

}

export default Reviews;