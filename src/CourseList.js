import { Link } from 'react-router-dom';

const CourseList = ({ courses, query }) => {
  return (
    <div className='mt-10'>
      {courses
        .filter((course) =>
          course.Монгол_нэр.toLowerCase().includes(query.toLowerCase()),
        )
        .map((course) => (
          <div className='course-box' key={course.id}>
            <Link to={`/courses/${course.id}`}>
              <div>
                <h2 className='course-title text-xl font-bold mb-3 '>
                  {course.Монгол_нэр}
                </h2>
                <p>{course.Багц_цаг}</p>
              </div>
              <p className='course-index'>{course.Хичээлийн_индекс}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CourseList;
