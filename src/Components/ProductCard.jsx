export default function ProductCard({ id, name, price, image, addToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-img" />

      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}</p>

      <button
        className="add-btn"
        onClick={() => addToCart({ id, name, price, image })}
      >
        Add to Cart
      </button>
    </div>
  );
}
