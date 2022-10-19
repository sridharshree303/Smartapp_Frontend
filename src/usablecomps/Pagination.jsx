import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Pagination = ({ data, pagehandler, previousPage, nextPage }) => {

    const [curPage, setCurPage] = useState(0);

    const [pageNums] = useState([]);
    for (let i = 1; i < Math.ceil(data.length / 5) + 1; i++) {
        pageNums.push(i);
    }
    useEffect(() => {
     // eslint-disable-next-line
    }, [pageNums])
     

    return (
        <div>
            <center>
                {

                    <button className=' bg-white textsize pagebutton m-1'
                        onClick={() => previousPage(curPage - 1)}>Previous</button>
                }
                {pageNums.map(page =>
                        <button key={page} className=' bg-white textsize pagebutton m-1'
                            onClick={() => pagehandler(page) && setCurPage(page)}>{page}</button>
                )}
                {
                    <button className=' bg-white textsize pagebutton m-1'
                        onClick={() => nextPage(curPage + 1)}>Next</button>
                }
            </center>
        </div>
    )
}

export default Pagination;
