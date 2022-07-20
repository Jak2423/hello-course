import React from 'react';
import Home from './Home';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col h-screen overflow-y-scroll font-Roboto-Mono'>
        <main className='pt-16 px-10 flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses/:id' element={<CourseDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <div className='bottom-0'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
