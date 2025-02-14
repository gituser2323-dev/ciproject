
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InternShip } from './InternShip';
import {Home} from './Home'
import {FreeMasterClass} from './FreeMasterClass';
import {Placement} from './Placement';
import {Review} from './Review';
import CoporateTraining from './CoporateTraining';


function App() {

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/freeClass' element={<FreeMasterClass />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Review' element={<Review />}></Route>
          <Route path='/InternShip' element={<InternShip />}></Route>
          <Route path='/Placement' element={<Placement />}></Route>
          <Route path='/CoporateTraining' element={<CoporateTraining />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
