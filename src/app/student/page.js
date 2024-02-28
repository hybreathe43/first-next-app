import Link from "next/link";

const arr = ["sahil", "mubeen", "azeem", "iman"];
const Student = () => {
  return (
    <div>
      Student Page
      {arr.map((data, index) => (
        <div>
          <Link href={"/student/" + data}>{data}</Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Student;
