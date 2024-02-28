"use client";
const lsit = ({ params }) => {
  console.log(params);
  return <div>Student name is :{params.std}</div>;
};

export default lsit;
