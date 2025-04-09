import React ,{useEffect, useState} from 'react'
import style from './Home.module.css'
import instance from '../../Instance/instance'
import { Col } from 'react-bootstrap'
function Home() {
    const [trending, setTrending] = useState([])
    const [popular, setPopular] = useState([])
    let api_key='bf85c6cd8c2021f4fe2f6fdae05710eb'


    // let sliderImgs = trending.map((item)=>{return item.poster_path})
    
    useEffect(()=>{
      instance
      .get(`/top_rated?api_key=${api_key}`).then((res)=>{
        setTrending(res.data.results)

      })
      instance
      .get(`/popular?api_key=${api_key}`).then((res)=>{
        setPopular(res.data.results)

      })

    },[api_key])

    
  return (
    <>

    
    <div className={` ${style.bg }  ps-5 text-start` } style={{height:"31vh"}}>
      <div className="row text-white p-5  ">
        <h2>Welcome.</h2>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        
        </div>
        
        
      {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        
        {sliderImgs.map((img)=>(
          <div class="carousel-inner" key={img}>
            <div class="carousel-item active">
              <img class=" w-100" 
              src={"https://image.tmdb.org/t/p/w500"+img}
              alt="First slide"/>
            </div>
          </div>
        ))}

           
      </div> */}


    </div>
    <div className=" trending w-75 m-auto">
      <h2 className="text-dark">Trending</h2>
      <div className="d-flex overflow-auto col-12" style={{height:'40vh'}}>  
        {
        trending.map((movie) => (
          <Col xs={6} md={3} lg={2} className="card text-start ">
            <img className="card-img-top h-75" 
            src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
            alt="Title" />
            <div className="card-body h-25">
              <p className="small m-0 overflow-hidden h-75 " style={{fontSize:"11px" , fontWeight:'bold'}}>{movie.title}</p>
              <p className="small m-0 ">{movie.release_date}</p>
            </div>
          </Col>
        ))
      }
      
      </div>
    </div>
    <div className="popular w-75 m-auto">
      <h2 className="text-dark">Whats's Popular</h2>
      <div className={ `${style.scroll} d-flex overflow-auto col-12`} style={{height:'40vh'}}>  
        {
        popular.map((movie) => (
          <Col xs={6} md={3} lg={2} className="card text-start ">
            <img className="card-img-top h-75" 
            src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
            alt="Title" />
            <div className="card-body h-25">
              <p className="small m-0 overflow-hidden h-75 " style={{fontSize:"11px" , fontWeight:'bold'}}>{movie.title}</p>
              <p className="small m-0 ">{movie.release_date}</p>
            </div>
          </Col>
        ))
      }
      
      </div>
    </div>
    
    
    </>
  )
}

export default Home
