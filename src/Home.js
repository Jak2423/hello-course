import { useState } from 'react';
import CourseList from './CourseList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: courses,
    isPending,
    error,
  } = useFetch('http://localhost:8000/courses');

  const [query, setQuery] = useState('');

  return (
    <div className='home'>
      <h2 className='text-3xl font-extrabold text-center leading-none'>
        Hello World
      </h2>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Хичээлийн нэрээр хайх...'
          className='search-bar'
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {courses && query.length !== 0 && (
        <CourseList courses={courses} query={query} />
      )}
    </div>
  );
};

export default Home;
