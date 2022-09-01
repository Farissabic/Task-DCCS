
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Overview from './pages/Overview';



function App() {
  return (
    <Router>
       <Sidebar/>
       <Routes>
        <Route path='/overview' exact element={<Overview/>}></Route>
       </Routes>
    </Router>
    
  );
}

export default App;
