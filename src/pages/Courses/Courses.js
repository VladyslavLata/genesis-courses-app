import { useState, useEffect } from 'react';
import { getAllCourses } from 'API/API';
// import { Container } from 'components/Container/Container';
import { CoursesList } from 'components/CoursesList/CoursesList';

export const Courses = () => {
  const [courses, setCourses] = useState([]);

  // const dd = [{ id: 1 }, { id: 2 }];

  useEffect(() => {
    const getCourses = async () => {
      try {
        const allCourses = await getAllCourses();
        setCourses(allCourses.courses);
      } catch (error) {
        console.log(error?.message);
      }
    };

    getCourses();
  }, []);

  console.log(courses);
  return (
    <>
      {courses.length !== 0 && <CoursesList courses={courses} />}
      <p>aa</p>
    </>
  );
};
