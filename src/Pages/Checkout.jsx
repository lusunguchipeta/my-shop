export default function Checkout({ cart }) {
  const totalAmount = cart.reduce((total, item) => {
    const priceNumber = parseFloat(
      item.price.replace("MK", "").replace(",", "")
    );
    return total + priceNumber;
  }, 0);

  function makePayment() {
    PaychanguCheckout({
      public_key: "pub-test-CMEJWkqzmttSfAgYXQeeSsysUVD9DHXi",
      tx_ref: "" + Math.floor(Math.random() * 1000000000 + 1),
      // amount: 50,
      amount: totalAmount,
      currency: "MWK",
      callback_url: "https://developer.paychangu.com/docs/inline-popup",
      return_url: "",
      customer: {
        email: "luechipeta@gmail.com",
        first_name: "Mac",
        last_name: "Phiri",
      },
      customization: {
        title: "Lusungu Store Payment",
        description: "Payment Description",
      },
      meta: {
        uuid: "uuid",
        response: "Response",
      },
    });
  }

  return (
    <div className="checkout-page">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          fontSize: "20px",
        }}
      >
        <h1>Checkout</h1>

        {cart.length === 0 ? (
          <p>No items to checkout.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <p>
                {item.name} - {item.price}
              </p>
            </div>
          ))
        )}

        <h2>Total: {totalAmount}</h2>

        <div id="wrapper"></div>
        <button
          style={{
            padding: "20px",
            border: "none",
            color: "#fff",
            // background: "#ec9dd8",
            background: "#e546bb",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "20px",
          }}
          onClick={makePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
