import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom';
import { useAuthcontext } from './Components/useAuthcontext';

import Signup from './Components/Signup';
import Login from './Components/Login';
import  Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  const {user} = useAuthcontext();

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>        
      <Routes>
          <Route
          path='/'
          element={user ? <Home/>:<Navigate to='/login'/>}
          />
	  <Route
          path='/signup'
          element={!user ? <Signup/>:<Navigate to='/'/>}
          />
           <Route
          path='/login'
          element={!user ? <Login/>:<Navigate to='/'/>}
          />

          
        </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
