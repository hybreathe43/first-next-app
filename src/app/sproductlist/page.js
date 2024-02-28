import Image from "next/image";
import { Roboto } from "next/font/google";
import img from "../../../public/next.svg";

const roro = Roboto({
  weight: "900",
  subsets: ["latin"],
  //   display: "swap",
});

async function productList() {
  let sData = await fetch("https://dummyjson.com/products");
  sData = await sData.json();
  return sData.products;
}

const Spage = async () => {
  let pro = await productList();
  const arr = [img, img, img];
  return (
    <div>
      <h1 className={roro.className}>sahil</h1>
      {pro.map((data, index) => (
        <div key={index}>
          <h1 key={index}>{data.title}</h1>

          <Image src={data.images[0]} width={200} height={200} />
        </div>
      ))}
    </div>
  );
};

export default Spage;

export function generateMetadata({ params }) {
  return {
    title: "mu beauty page",
  };
}
