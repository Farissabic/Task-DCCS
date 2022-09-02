
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import Overview from './pages/Overview';
import Home from './pages/Home';



function App() {
  return (
    <Router>
       <Sidebar/> 
       <Routes>
          <Route path='/' exact element={ <Home/> }/>
          <Route path='/overview' exact element={<Overview/>}></Route>
        </Routes>
    </Router>
    
  );
}

export default App;



// <Route path='/' exact element={ <Home/> }/>