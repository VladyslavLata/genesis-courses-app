import { Link } from 'react-router-dom';
import { CoursePreview } from 'components/CoursePreview/CoursePreview';

export const CoursesList = ({ courses }) => {
  return (
    <ul>
      {courses.map(course => {
        const { id, meta } = course;
        return (
          <li key={id}>
            {/* <Link to={`${id}?course=${meta.slug.toLowerCase()}`}> */}
            <CoursePreview course={course} />
            {/* </Link> */}
          </li>
        );
      })}
    </ul>
  );
};
