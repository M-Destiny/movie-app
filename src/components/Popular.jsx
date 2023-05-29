import React, { useState, useEffect } from 'react';
import APIPATH from '../Apipath';
import { Link } from 'react-router-dom';
import '../style.css';

const Popular = () => {
    const { path, key, imagepath } = APIPATH;
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        const url = `${path}/3/movie/popular?api_key=${key}&language=en-US&page=${currentPage}`;

        try {
            const response = await fetch(url);
            const { results, total_pages } = await response.json();
            setData(results);
            setTotalPages(total_pages);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const maxDisplayedPages = 10;
        const pageNumbers = [];
        const totalPagesToShow = Math.min(totalPages, maxDisplayedPages);

        let startPage;
        let endPage;

        if (totalPages <= maxDisplayedPages) {
            startPage = 1;
            endPage = totalPages;
        } else if (currentPage <= Math.floor(maxDisplayedPages / 2)) {
            startPage = 1;
            endPage = totalPagesToShow;
        } else if (currentPage >= totalPages - Math.floor(maxDisplayedPages / 2)) {
            startPage = totalPages - totalPagesToShow + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - Math.floor(maxDisplayedPages / 2);
            endPage = currentPage + Math.floor(maxDisplayedPages / 2);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map((pageNumber) => (
            <button
                key={pageNumber}
                className={`pagination__button ${pageNumber === currentPage ? 'active' : ''}`}
                onClick={() => handlePageChange(pageNumber)}
            >
                {pageNumber}
            </button>
        ));
    };

    return (
        <div>
            <div className="pagination__top">
                <p>{currentPage}</p>
            </div>
            <div className="container mt-3">
                <div className="row">
                    {data.map((val) => (
                        <div className="col-xl-3 text-center" key={val.id}>
                            <Link to={`/singlepage/${val.id}`}>    <img src={imagepath + val.poster_path} className="img-fluid" alt={val.original_title} /></Link>
                            <h4 className="title-text">{val.original_title}</h4>
                            <p>Rate: {val.vote_average}</p>
                            <p>Release Date : {val.release_date}</p>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button className="pagination__button" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>
                    {renderPageNumbers()}
                    <button className="pagination__button" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>

                        
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popular;
// https://wtools.io/paste-code/bMFY
