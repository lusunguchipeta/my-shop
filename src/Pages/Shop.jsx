import ProductCard from "../Components/ProductCard";
import tshirtImg from "../assets/tshirt.jpg";
import dressImg from "../assets/dress.jpg";
import skirtImg from "../assets/skirt.jpg";

export default function Shop({ addToCart }) {
  const products = [
    { id: 1, name: "Classic T-Shirt", price: "MK15,000", image: tshirtImg },
    { id: 2, name: "Ladies Dress", price: "MK25,000", image: dressImg },
    { id: 3, name: "Ladies Skirt", price: "MK3,000", image: skirtImg },
  ];

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop With Us</h1>
      <p className="shop-subtitle">Grow your style with Lue’s Boutique</p>

      <div className="product-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
