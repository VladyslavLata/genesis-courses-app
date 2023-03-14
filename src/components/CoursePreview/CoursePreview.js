import ReactPlayer from 'react-player';

export const CoursePreview = ({ course }) => {
  const {
    id,
    title,
    description,
    lessonsCount,
    rating,
    meta,
    previewImageLink,
  } = course;
  return (
    <>
      <h2>{title}</h2>
      <p> {meta.courseVideoPreview?.link}</p>
      {/* <img src={`${courseVideoPreview.link}`} /> */}
      {/* <video
        width="250px"
        height="250px"
        controls
        // poster={`${previewImageLink}/cover.webp`}
        // src={
        //   'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        // }
        // src={meta.courseVideoPreview?.link}
      >
        <source src={meta.courseVideoPreview?.link} type="video/mp4" />
        <source src={meta.courseVideoPreview?.link} type="video/m3u" />
        <source src={meta.courseVideoPreview?.link} type="video/ogg" />
      </video> */}
      <ReactPlayer
        url={meta.courseVideoPreview?.link}
        width={200}
        height={200}
      />
    </>
  );
};
