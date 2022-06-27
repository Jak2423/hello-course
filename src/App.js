import React from 'react';
import Home from './Home';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='mt-16 mx-10 font-Roboto-Mono'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses/:id' element={<CourseDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
