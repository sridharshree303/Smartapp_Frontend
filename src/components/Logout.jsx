import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../utils/Auth';

const Logout = () => {

  const [message, setMessage] = useState('');
  const auth = useAuth();
  const [emp, setEmp] = useState(auth.employee);
  const navigate = useNavigate();

  useEffect(() => {
    auth.logout(emp);
    axios.post(`http://localhost:8082/employee/logout`, auth.employee).then(
      (response) => {
        // console.log(response.data);
        setMessage(response.data);
        setTimeout(() => {
          setEmp(null);
          auth.resetAuth();
          auth.checkactive(false);
          navigate('/')
        }, 500)
      }
    ).catch(error => {
      console.log(error);
    })
    // eslint-disable-next-line
  }, [])


  return <h1 className='text-center'>{message}</h1>;
}

export default Logout
