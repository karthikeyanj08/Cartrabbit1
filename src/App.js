import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
// import Owner from './components/Owner';
import Login from './components/Login';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './components/Register';
import Owner from './components/Owner';


function App() {
  return (
    <div className="App">
            <BrowserRouter> 
      <Routes>

         <Route path='/register' element={<Register/>}/> 
         <Route index element={<Home/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/owner' element={<Owner/>}/>

      </Routes>
      
      
      
      </BrowserRouter> 

      {/* <Home/> */}
      {/* <Owner/> */}
       {/* <Login/>  */}
       {/* <Register/> */}
    </div>
  );
}

export default App;
