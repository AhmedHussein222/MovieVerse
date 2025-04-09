import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesAction } from "../../Store/Slices/Movies";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct, removeProduct } from "../../Store/Slices/WishlistSlice";
import { Row, Button, Col } from "react-bootstrap";
import style from "./Movies.module.css";
export default function Movies() {
  let dispatch = useDispatch();
  let { pageNumber } = useParams()
  let [search,setSearch]=useState("")
  let Movies = useSelector((state)=> 
    state.movies.movies?.filter((movie) => 
      movie.title.toLowerCase().includes(search.toLowerCase())
    )
  )
  let nav = useNavigate()
  useEffect(() => {
    dispatch(moviesAction(pageNumber ))
    
  }, [dispatch, pageNumber])
  
  const toggle=(movie,e)=>{
    let status = e.target.classList.contains("bi-heart-fill")

  if (status) {
    e.target.classList.remove('bi-heart-fill')
    e.target.classList.add('bi-heart')
    dispatch(removeProduct(movie))
  } else {
    e.target.classList.remove('bi-heart')
    e.target.classList.add('bi-heart-fill')
    dispatch(addProduct(movie))
  }
}

   
    return (
        <>
        <div className="sticky-top top-0 text-center bg-light w-100" style={{ zIndex: 1 }}>
                <i className="fa fa-search  position-absolute pt-2 ps-2 "></i>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`${style.searchInput}  w-75 border-0 px-5`}
                  placeholder="Search for Your movie"
                />
              </div>
            <Row className="gap-2">

                <div className="d-flex justify-content-between ">
                        <button 
                            className="btn btn-primary"
                            disabled={Number(pageNumber) === 1}
                            onClick={()=>{
                            nav(`/movies/${Number(pageNumber) - 1}`)
                        }}>
                            Previous
                        </button>

                        <button 
                            className="btn btn-primary"

                        onClick={()=>{nav(`/movies/${Number(pageNumber) + 1}`)}}
                        disabled={Number(pageNumber) === 7}

                        >
                            Next
                        </button>
                        
                </div>

                <div className="col-md-3 px-5l d-flex flex-wrap gap-2 justify-content-around  mb-4 w-100">
                {Movies?.map((movie) => (
                  <Col key={movie.id} className="p-2 col-3">
                    <img
                      src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
                      className="card-img-top"
                      alt={movie.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text h-25">
                        ⭐ {movie.vote_average} | 📅 {movie.release_date}
                      </p>
                      <div className="d-flex justify-content-between ">
                        <Button className="btn btn-primary w-75" onClick={()=>{nav("/details/"+movie.id)}}>View Details</Button>
                        <i className="bi bi-heart text-danger my-auto mx-2" onClick={(e)=>{toggle(movie,e)}}></i>
                      </div>
                    </div>
                  </Col>
                ))}
                </div>
            </Row>
        </>
    );
  }

