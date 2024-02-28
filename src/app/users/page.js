const getata = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
};

const Users = async () => {
  const data = await getata();
  return (
    <div>
      {data.map((data, index) => (
        <h1 key={index}>{data.title}</h1>
      ))}
    </div>
  );
};

export default Users;
