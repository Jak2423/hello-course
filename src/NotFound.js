import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found h-screen text-xl text-center flex flex-col items-center justify-center'>
      <h1 className='text-2xl'> 404 | This page could not be found</h1>
      <Link to='/' className='underline'>
        Back to the homepage...
      </Link>
    </div>
  );
};

export default NotFound;
