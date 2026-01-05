import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import tshirtImg from "../assets/tshirt.jpg";
import jacketImg from "../assets/jacket.jpg";
import dressImg from "../assets/dress.jpg";
import hoodieImg from "../assets/hoodie.jpg";
import jeansImg from "../assets/jeans.jpg";
import skirtImg from "../assets/skirt.jpg";
import "../App.css";

export default function Home({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: "MK15,000",
      category: "Men",
      image: tshirtImg,
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: "MK25,000",
      category: "Men",
      image: jacketImg,
    },
    {
      id: 3,
      name: "Summer Dress",
      price: "MK20,000",
      category: "Women",
      image: dressImg,
    },
    {
      id: 4,
      name: "Hoodie",
      price: "MK60,000",
      category: "Unisex",
      image: hoodieImg,
    },
    {
      id: 5,
      name: "Jeans",
      price: "MK75,000",
      category: "Men",
      image: jeansImg,
    },
    {
      id: 6,
      name: "Skirt",
      price: "MK3000",
      category: "Women",
      image: skirtImg,
    },
  ];

  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="main">
      <h2 className="heading">Explore Our Collection</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search for clothing..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Unisex">Unisex</option>
        </select>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((item) => (
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
      ) : (
        <p className="no-products">No products found 😢</p>
      )}
    </main>
  );
}
