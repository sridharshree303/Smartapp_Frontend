import React, { useState, useEffect } from 'react'
import Records from '../usablecomps/Records';
import Dpage from './Dpage';
import axios from 'axios';

const Paginate = () => {

    // To hold the actual data
    // const [data, setData] = useState([]);
    const [data, setData] = useState({
        searchKey: '',
        loading: false,
        users: [],
        filtUsers: [],
        errorMessage: null
    });

    let { searchKey, loading, users, filtUsers, errorMessage } = data;

    const [tempData, setTempdata] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    let currentRecords = tempData.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(tempData.length / recordsPerPage);

    const changeHandler = (e) => {
        let filteredUsers = data.filtUsers.filter(user => {
            let app = user.firstName.toLowerCase().includes(e.target.value.toLowerCase());
            return app ? user : null;
        })
        console.log(e.target.value);
        setData({ ...data, users: filteredUsers, searchKey: e.target.value })
        setTempdata(filteredUsers);
        console.log(tempData);
    }

    useEffect(() => {
        async function fetchdata() {
            setData({ ...data, loading: true });
            axios.get(`http://localhost:8082/employee/getall`).then(
                response => {
                    setData({
                        ...data,
                        loading: false,
                        users: response.data,
                        filtUsers: response.data
                    });
                    setTempdata(response.data);
                    console.log(response.data);
                }
            ).catch(
                error => {
                    console.log(error);
                }
            )
        }
        fetchdata();
        // eslint-disable-next-line
    }, [recordsPerPage]);

    return (
        <div className='container'>
            <Records data={currentRecords} changeHandler={changeHandler} searchKey={data.searchKey} />
            <Dpage nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default Paginate





// import axios from 'axios';
// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import Table from 'react-bootstrap/Table';
// import Pagination from '../usablecomps/Pagination';

// const Services = () => {
//     const [empList, setEmpList] = useState([]);
//     const [perPage, setPerPage] = useState([]);

//     useEffect(() => {
//             axios.get(`http://localhost:8082/employee/getall`).then(
//             response => {
//                 // console.log(response.data);
//                 setEmpList(response.data);
//                 setPerPage(response.data.slice(0,5));
//             }
//         ).catch(
//             error => {
//                 console.log(error);
//             }
//         )
//         pagehandler();

//        // eslint-disable-next-line
//     },[])

//     const pagehandler = (pagenumber) =>{
//         setPerPage(empList.slice((pagenumber*5)-5,pagenumber*5));
//     }

//     const previousPage = (pagenumber) =>{
//         setPerPage(empList.slice((pagenumber*5)-5,pagenumber*5));
//     }

//     const nextPage = (pagenumber) =>{
//         setPerPage(empList.slice((pagenumber*5)-5,pagenumber*5));
//     }


//     return (
//         <div className='container'>
//             <div className='card card-header text-center p-3 mb-3 mt-3'>
//                 <h1>Employee DETAILS</h1>
//             </div>
//             <Table striped bordered hover id="tablealign">
//                 <thead >
//                     <tr id="textsizeheader">
//                         <th className='pt-3 pb-3'>Employee ID</th>
//                         <th className='pt-3 pb-3'>FirstName</th>
//                         <th className='pt-3 pb-3'>LastName</th>
//                         <th className='pt-3 pb-3'>Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         perPage.map((emp) =>
//                             <tr key={emp.empId} id="textsize">
//                                 <td >{emp.empId}</td>
//                                 <td className="text-capitalize">{emp.firstName}</td>
//                                 <td className="text-capitalize">{emp.lastName}</td>
//                                 <td className="text-capitalize">{emp.email}</td>
//                             </tr>
//                         )
//                     }  
//                 </tbody>
//             </Table>
//             <Pagination data={empList} previousPage={previousPage} nextPage={nextPage} pagehandler={pagehandler}/>
//         </div>
//     )
// }

// export default Services;
