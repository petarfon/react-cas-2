//precica rafce
import React from "react";
import OneProduct from "./OneProduct";

const Products = ({ products, onAdd }) => {
  // const name = "Naziv proizvoda";
  // const desc = "Opis proizvoda";
  // const prod = {
  //   title: "Naziv proizvoda",
  //   description: "Opis proizvoda",
  // };

  return (
    <div className="all-products">
      {products.map((prod) => (
        <OneProduct key={prod.id} product={prod} onAdd={onAdd} />
      ))}
      {/* {products.map((prod) => {
        return <OneProduct product={prod} />;
      })} */}
      {/* <OneProduct product={products[0]} />
      <OneProduct product={products[0]} />
      <OneProduct product={products[0]} /> */}
    </div>
  );
};

export default Products;
