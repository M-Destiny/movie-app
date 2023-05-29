import React from 'react'
import APIPATH from '../Apipath'
import Apihook from '../Hooks/ApiHook'
import { Link } from 'react-router-dom'

const Homepage = () => {
  var { path, key, imagepath } = APIPATH
  var url = path + `/3/movie/popular?api_key=${key}&language=en-US&page=1`
  const data1 = Apihook(url)
  console.log(data1);
  console.log(data1.results);
  const data = data1.results
  console.log(data);



  return (
    <div className='container mt-3'>
      <div className='row'>
        {
          data && data.map(val =>
            <div className='col-xl-3 text-center'>

              <img src={imagepath + val.poster_path} className='img-fluid' />
              <h4 className='title-text'>{val.original_title}</h4>
              <p>Rate : {val.vote_average}</p>
              {/* <button className='btn btn-primary mb-3'> view more</button> */}
              <p ><span className='viewmore'><Link to={"/singlepage/" + val.id}>View More</Link></span></p>

            </div>)}
      </div>
    </div>
  )
}

export default Homepage

// https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1