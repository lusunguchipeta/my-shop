import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtext">
        We'd love to hear from you! Send us a message and we’ll respond as soon
        as possible.
      </p>

      {/* CONTACT FORM */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input
          type="email"
          placeholder="Your Email"
          className="contact-input"
        />
        <textarea
          placeholder="Your Message"
          className="contact-textarea"
        ></textarea>

        <button className="contact-btn">Send Message</button>
      </form>

      <div className="social-section">
        <h2>Find Us On</h2>

        <div className="social-links">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/Lusue Chipeta"
            target="_blank"
            rel="noopener noreferrer"
            className="social instagram"
          >
            <FaInstagram className="icon" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/Lusue Chipeta"
            target="_blank"
            rel="noopener noreferrer"
            className="social facebook"
          >
            <FaFacebook className="icon" />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@lusue070"
            target="_blank"
            rel="noopener noreferrer"
            className="social tiktok"
          >
            <FaTiktok className="icon" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/265884735987"
            target="_blank"
            rel="noopener noreferrer"
            className="social whatsapp"
          >
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
