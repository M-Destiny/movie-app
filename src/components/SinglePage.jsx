import React from 'react'
import { useParams } from 'react-router-dom'
import APIPATH from '../Apipath';
import Apihook from '../Hooks/ApiHook';
import '../style.css'
const SinglePage = () => {
  //useParams() hook to get the params from the URL
  let url = useParams()
  console.log(url);
  // let { movieId } = useParams()
  // console.log(movieId);
  const { path, key, imagepath } = APIPATH
  const details = Apihook(`${path}3/movie/${url.id}?api_key=${key}&language=en-US`)
  console.log(details);
  var castData = Apihook(`${path}3/movie/${url.id}/credits?api_key=${key}&language=en-US`);
  console.log(castData);

  const cast = castData.cast
  console.log(cast);

  const genere = details.genres
  console.log(genere);


  return (
    <div className='container details'>
      <div className='row singlecard'>
        <div className="col-xl-6">
          <div className='details d-flex'>
            <div className="col-xl-4 me-4 mt-4">
              <img src={imagepath + details.poster_path} className='img-fluid ' />
              {/* <img src={imagepath + details.backdrop_path} className='img-fluid' /> */}

            </div>
            <div className="col-xl-8">
              {/* <img src={imagepath + details.backdrop_path} className='img-fluid' /> */}
              <h1>{details.original_title}</h1>
              <p>Rate : {details.vote_average}</p>
              <p>Release Date : {details.release_date}</p>
              <p>Overview : {details.overview}</p>
              <p>Genere : {genere && genere.map(val => <span>{val.name} </span>)}</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mt-5">
          <img src={imagepath + details.backdrop_path} className='img-fluid big-img' />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <h1>Cast</h1>
          <div className="row">
            {
              cast && cast.map(val =>
                <div className="col-xl-2">
                  <img src={imagepath + val.profile_path} className='img-fluid' />
                  <p>{val.name}</p>
                  <p>{val.character}</p>
                </div>
              )
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
// https://api.themoviedb.org/3/movie/76600?api_key=9868a921fda52b4449cf1208e22ad622&language=en-US