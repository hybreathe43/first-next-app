"use client";
import { usePathname } from "next/navigation";

const arr = ["/about", "/about/aboutfirst"];

const layout = ({ children }) => {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      {arr.map((data) =>
        path !== data ? " " : <h1 key={data}>Second Layout</h1>
      )}

      {children}
    </div>
  );
};

export default layout;
