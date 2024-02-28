import Link from "next/link";

const page = () => {
  return (
    <div>
      Sahil About !!!
      <br />
      <Link href="/about/aboutfirst">First About</Link>
      <br />
      <Link href="/about/secondfirst">Second About</Link>
      <br />
      <Link href="/about/thirdabout">third About</Link>
      <br />
    </div>
  );
};

export default page;
