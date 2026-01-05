import luuImg from "../assets/luu.jpeg"; // ⭐ Replace with your actual image path

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* LEFT: Text Content */}
        <div className="about-text">
          <h1 className="about-title">About Lue's Boutique</h1>

          <p className="about-paragraph">
            Welcome to <strong>Lue’s Boutique</strong> — your trusted online
            fashion destination. Our mission is to bring stylish, high-quality,
            and affordable clothing right to your doorstep.
          </p>

          <p className="about-paragraph">
            We offer a wide range of trendy outfits for men, women, and unisex
            collections. Whether you're dressing for a casual day out or a
            special moment, we’ve got something for you.
          </p>

          <p className="about-paragraph">
            At Lue’s Boutique, we believe that{" "}
            <strong>fashion should be simple, elegant, and inspiring</strong>.
            Thank you for choosing us — your style is our inspiration.
          </p>
        </div>

        {/* RIGHT: Owner Image */}
        <div className="about-image-wrapper">
          <img src={luuImg} alt="Boutique Owner" className="about-image" />
          <h3 className="owner-name">Founder: Lue</h3>
        </div>
      </div>
    </section>
  );
}
