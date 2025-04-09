import React, { useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { removeProduct } from '../../Store/Slices/WishlistSlice'
import { useNavigate } from 'react-router-dom';
import { moviesAction } from '../../Store/Slices/Movies';
import { Card, Row, Col, Badge, Button, ButtonGroup } from "react-bootstrap";
import { Heart, List, X, Star } from "react-bootstrap-icons";

function Favorite() {


  let nav = useNavigate()
  let dispatch = useDispatch()
const favorites = useSelector((state) =>state.wishlist)
useEffect(() => {
  dispatch(moviesAction(1))
  
}, [dispatch])
const mov = useSelector((state) =>state.movies)


// console.log(favorites);
console.log(mov);

  let remove = (id)=>{
      dispatch(removeProduct(id))
  }

 



  return(

    <>
    
    
    
 

       <div className="container">
         <div className="row " style={{minHeight:'45vh'}}>
           {favorites.map((movie) => (
            <Card className="p-3 shadow-sm">
            <Row>
              {/* صورة الفيلم */}
              <Col xs={3} md={1} style={{height:'100%',margin:0,minWidth:'10%'}} >
                <Card.Img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  onClick={()=>{nav("/details/"+movie.id)}}
                  alt="Movie Poster"
                  className=" h-100 w-100 "
                />
              </Col>

              {/* تفاصيل الفيلم */}
              <Col xs={9} md={10}>
                <div className="d-flex align-items-center mb-2">
                  <Badge bg="warning" text="dark" className="me-2">
                    61%
                  </Badge>
                  <h5 className="mb-0">{movie.title}</h5>
                </div>
                <p className="text-muted mb-1">{movie.release_date}</p>

                <p className="text-truncate." >
                {movie.overview}
                </p>

                {/* أزرار التفاعل */}
                <ButtonGroup>
                  <Button variant="light">
                    <Star /> Rate it!
                  </Button>
             
                  <Button variant="light">
                    <List /> Add to list
                  </Button>
                  <Button variant="light"  onClick={()=>{remove(movie.id)}} style={{color:'red'}}>
                    <X /> Remove
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Card>


          // <div key={movie.id} className="" style={{height:"15vh"}}>
          //   <div className="row ">
          //         <img 
          // src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="h-100 w-25" alt={movie.title} />
          //         <div>

          //           <h5 className="">{movie.title}</h5>
          //           <p className="">
          //             ⭐ {movie.vote_average} | 📅 {movie.release_date}
          //           </p>
          //           <div className='d-flex justify-content-between'>
          //           <button className="btn btn-primary w-75" onClick={()=>{nav("/details/"+movie.id)}}>View Details</button>
          //           <i className="bi bi-trash-fill text-danger my-auto mx-2 h-50"   onClick={()=>{remove(movie.id)}}></i>

          //           </div>

          //         </div>
                    
                
          //   </div>
          // </div>
           ))}
           
         </div>
       </div>
  </> 
)
}

export default Favorite









