import React,{useState} from 'react';
import Table from 'react-bootstrap/Table';

const Records = ({ data,changeHandler,searchKey }) => {
    return (
        <div className='container'>
            <div className='card card-header text-center p-3 mb-3 mt-3'>
                <h2>Employee DETAILS</h2>
            </div>
            <div className='row filters'>
                
                <div className='col-4'>

                </div>
                <div className='col-5'>

                </div>
                <div className='col-3'>
                        <input 
                            className="search col-12 px-3" 
                            type="search" 
                            name ="user"
                            value = {searchKey}
                            onChange={changeHandler}
                            placeholder="Search by Name" 
                            aria-label="Search"/> &nbsp; &nbsp;
                </div>
            </div>
            <Table striped bordered hover id="tablealign">
                <thead >
                    <tr id="textsizeheader">
                        <th className='pt-3 pb-3'>Employee ID</th>
                        <th className='pt-3 pb-3'>FirstName</th>
                        <th className='pt-3 pb-3'>LastName</th>
                        <th className='pt-3 pb-3'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((emp) =>
                            <tr key={emp.empId} id="textsize">
                                <td >{emp.empId}</td>
                                <td className="text-capitalize">{emp.firstName}</td>
                                <td className="text-capitalize">{emp.lastName}</td>
                                <td className="text-capitalize">{emp.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Records
