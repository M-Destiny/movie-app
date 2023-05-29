import React, { useContext, useEffect, useState } from 'react'
import APIPATH from '../Apipath'
import { Link } from 'react-router-dom';

const SearchPage = (props) => {
    console.log(props);
    var { path, key, imagepath } = APIPATH
    var { searchdata } = props


    const [apival, setApival] = useState()
    console.log(apival);
    useEffect(() => {
        const api = `${path}3/search/movie?api_key=${key}&language=en-US&query=${searchdata}&page=1`;
        console.log(api);
        fetch(api)
            .then(res => res.json())
            .then(val => {
                console.log(val);
                setApival(val.results);
            })
    }, [searchdata]);
    return (
        <div className='container mt-3'>
            <div className='row'>
                {
                    apival && apival.map(val =>
                        <div className='col-xl-3 text-center'>

                            <Link to={"/singlepage/" + val.id}>   <img src={imagepath + val.poster_path} className='img-fluid' /></Link>
                            <h4 className='title-text'>{val.original_title}</h4>
                            <p>Rate : {val.vote_average}</p>
                            {/* <button className='btn  mb-3'><Link to={"/singlepage/" + val.id}>View More</Link></button> */}

                        </div>)}
            </div>
        </div>
    )
}

export default SearchPage


// https://api.themoviedb.org/3/search/movie?api_key=9868a921fda52b4449cf1208e22ad622&language=en-US&query=blackpink&page=1