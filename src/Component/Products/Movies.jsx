import React, {  useEffect ,useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {  useNavigate, useParams } from "react-router-dom";
import instance from "../../Instance/instance";

function Movies() {
    const [Movies, setMovies] = useState([]);
    let nav = useNavigate();
    let {pageNumber}=useParams()
    // setMovies(useLoaderData())
    let api_key='bf85c6cd8c2021f4fe2f6fdae05710eb'

    useEffect(
        ()=>{

            instance
                .get(`/popular?api_key=${api_key}&page=${pageNumber}`)
                .then((res) => {
                    setMovies(res.data.results);
                            
                    
                })
                .catch(() => {
        
                });
        },[api_key,pageNumber]
    )
 
    return (
        <>
            <Row className="gap-2">
                <div>
                        <button 
                            disabled={pageNumber == 1}
                            onClick={()=>{
                            nav(`/movies/${--pageNumber}`)
                        }}>
                            Previous
                        </button>

                        <button 
                        onClick={()=>{nav(`/movies/${++pageNumber}`)}}
                        disabled={pageNumber == 7}

                        >
                            Next
                        </button>
                        
                </div>
                {Movies.map((movie) => (
                    <Col className="" key={movie.id}>
                        <Card style={{ width: "17rem" }}>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>Popularity :{movie.popularity}</Card.Text>
                                <Button onClick={()=>{nav("/details/"+movie.id)}}>Go Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Movies;
