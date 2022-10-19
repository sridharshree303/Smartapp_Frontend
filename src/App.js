import './App.css';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { AuthProvider } from './utils/Auth';
import Logout from './components/Logout';
import DashBoard from './components/DashBoard';
import BTNavbar from './components/BTNavbar';
import React from 'react'
import Page404 from './components/Page404';
import Services from './components/Services';

const App = () => {
    return (
      <div className="App bgimage">
        <AuthProvider>
          <Router>
            <BTNavbar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login />} />
              <Route path='logout' element={<Logout />} />
              <Route path='dashboard' element={<DashBoard />} />
              <Route path='service' element={<Services />} />
              <Route path='*' element={<Page404/>}/>
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    )
}

export default App;


// function App() {
//   return (
//     <div className="App bgimage">
//       <AuthProvider>
//         <Router>
//           <BTNavbar/>
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='register' element={<Register />} />
//             <Route path='login' element={<Login />} />
//             <Route path='logout' element={<Logout/>}/>
//             <Route path='dashboard' element={<DashBoard/>}/>
//           </Routes>
//         </Router>
//       </AuthProvider>
//     </div>
//   );
// }

// export default App;
