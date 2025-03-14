// import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  // async function search(target) {
  //  let  res = await axios.get(` https://api.themoviedb.org/3/search/movie?api_key=bf85c6cd8c2021f4fe2f6fdae05710eb&language=en-US` )
  //  console.log(res);
    
  //  return res.data.results;

  // }
  // let searchWord = document.getElementById('searchWord')
return (

  <>
 
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
      >
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Movies/1" aria-current="page">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Favorite" aria-current="page">Favorite</Link>
              </li>
             
            
         
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
                id='searchWord'
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                // onClick={()=>{search(searchWord.value)}}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      

  </>

)
}

export default Header