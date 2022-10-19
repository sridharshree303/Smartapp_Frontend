import React from 'react';
import { useState } from 'react';
import { useAuth } from '../utils/Auth';

const DashBoard = () => {

    const auth = useAuth();
    const [user,setUser] = useState(auth.employee);
  return (
    <div>
      <h2>Dashboard component</h2>
        <div>
            {user.firstName}<br/>
            {JSON.stringify(user)}
        </div>
        
    </div>
  )
}

export default DashBoard
