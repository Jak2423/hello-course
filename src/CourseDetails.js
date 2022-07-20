import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const CourseDetails = () => {
  const { id } = useParams();
  const {
    data: course,
    error,
    isPending,
  } = useFetch('http://localhost:8000/courses/' + id);

  return (
    <div className='course-details w-full max-w-6xl'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {course && (
        <article>
          <div className='mb-5'>
            <h2 className='text-4xl grow font-extrabold'>
              {course.Монгол_нэр}{' '}
            </h2>
            <p>
              {course.Хичээлийн_индекс} | {course.Харьяалах_тэнхим} | Багц цаг:
              {course.Багц_цаг}
            </p>
          </div>
          <div>
            <h3 className='underline underline-offset-4 decoration-4  decoration-neutral-600 text-lg mb-4 font-bold leading-5'>
              Зорилго
            </h3>
            <p className='text-justify indent-4'>{course.Зорилго}</p>
            <h3 className='underline underline-offset-4 decoration-4  decoration-neutral-600 text-lg mb-4 font-bold leading-5 pt-2'>
              Товч Агуулга
            </h3>
            <p className='text-justify indent-4'>{course.Товч_агуулга}</p>
          </div>
        </article>
      )}
    </div>
  );
};

export default CourseDetails;
