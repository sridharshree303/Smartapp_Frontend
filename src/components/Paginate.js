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
