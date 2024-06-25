
import './App.css';
import './Components/Navbar.js'
import Home from './Screens/Home.js';
import About from './Screens/About.js';
import Login from './Screens/Login.js';
import SignUp from './Screens/SignUp.js';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ResetPass from './Screens/ResetPassword.js';
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
        <Route index element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/ResetPass' element={<ResetPass/>}/>
        </Routes>
      </BrowserRouter>
    
    </>
    
  );
}

export default App;
