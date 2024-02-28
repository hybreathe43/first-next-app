"use client";
const Lecture = ({ params }) => {
  console.log(params);
  return <div>This is Lecture Page :{params.lecture[0]}</div>;
};

export default Lecture;
