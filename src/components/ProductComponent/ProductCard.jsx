import "./ProductCard.css";
import { useCart } from "./../../cart-context";
export const ProductCard = ({ product }) => {
  const {
    id,
    name,
    img,
    brand,
    newPrice,
    oldPrice,
    discount,
    size,
    rating
  } = product;

  const { cartState } = useCart();
  console.log(cartState);
  const isItemInCart = cartState.ids.forEach((Id) => Id === id);
  return (
    <div className="card card-vertical d-flex align-center direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src={img} alt="shoes" />
      </div>
      <div className="card-details">
        <div className="card-title"> {brand}</div>
        <div className="card-description">
          <p className="card-des">{name}</p>
          <p className="card-price">
            Rs. {newPrice}
            <span className="price-strike-through">Rs. {oldPrice}</span>
            <span className="discount">({discount}% OFF)</span>
          </p>
          <p className="d-flex items-center jsutify-center">
            {rating} <span></span>
          </p>
        </div>

        <div className="cta-btn">
          <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
