      import { useEffect, useState } from 'react';
      import Button from 'react-bootstrap/Button';
      import Card from 'react-bootstrap/Card';
      import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../Instance/instance';

function Details() {
  let {id} = useParams()
  let [movie, setMovie] = useState({})
  const nav = useNavigate()
  let api_key='bf85c6cd8c2021f4fe2f6fdae05710eb'

  useEffect(()=>{
    instance
    .get(`${id}?api_key=${api_key}`)
    .then((res) => {
        setMovie(res.data);
        console.log(res.data);
        
    })
    .catch((err) => {
      console.log(err,"error");
      
    });
  }, [api_key,id])

        
        



        return (
        <>
        <div className='d-flex gap-4 w-75'>
          <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}   className='col-4'/>
          <Card.Body className='d-flex flex-column gap-5'>
            <Card.Title>{movie.original_title}</Card.Title>
            <Card.Text>
              {movie.overview}
            </Card.Text>
          </Card.Body>
        </div>
          <Button variant="primary"
           onClick={()=>{nav("/Movies/1")}}
           >Go Home</Button>
        
        </>
        );
      }

      export default Details;