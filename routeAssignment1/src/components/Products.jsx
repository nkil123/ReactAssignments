import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        console.log(r.data);
      });
  }, []);
  return (
    <>
      <div>Product Details of id:{id}</div>
    </>
  );
};
