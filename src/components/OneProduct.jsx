import { BsPlusLg, BsDashLg } from "react-icons/bs";

// destrkturiranje props objekta (razbijamo objekat na njegove delove)
function OneProduct({ product, onAdd }) {
  const stil = { margin: 1 + "em", borderStyle: "dashed" };
  //console.log(props);

  return (
    <div className="card" style={stil}>
      <img
        className="card-img-top"
        src="https://picsum.photos/200"
        alt="bla bla"
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
      <button className="btn" onClick={() => onAdd(product.title)}>
        <BsPlusLg />
      </button>
      <button className="btn">
        <BsDashLg />
      </button>
    </div>
  );
}

export default OneProduct;
