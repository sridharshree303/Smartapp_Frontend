import React from 'react';

const Dpage = ({ nPages, currentPage, setCurrentPage }) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {
                    currentPage !== 1 ?
                        <button className="page-item btn btn-light"
                            onClick={prevPage} >
                            Previous
                        </button> :
                        null
                }
                {pageNumbers.map(pgNumber => (
                    <button key={pgNumber}
                        className={`page-item btn btn-light  ${currentPage === pgNumber ? 'active  ' : ''} `}
                        onClick={() => setCurrentPage(pgNumber)} >
                        {pgNumber}
                    </button>
                ))}
                {
                    currentPage === pageNumbers.length ?
                        null :
                        <button className="page-item btn btn-light"
                            onClick={nextPage} >
                            Next
                        </button>
                }
            </ul>
        </nav>
    )
}

export default Dpage
