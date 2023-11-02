import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div className="home__card">
        <h2>TITULO</h2>
        <div className="home__card--cardButons">
          <div className="home__card--cardButons--buton">
            <h3>Product</h3>
            <a href="https://otmtrading.lemonsqueezy.com/checkout/buy/b3ba82d0-6bae-4528-b6c4-11b5b9732abc" target="_blank">
              Boton
            </a>
          </div>
          <div className="home__card--cardButons--buton">
            <h3>Product</h3>
            <a href="https://otmtrading.lemonsqueezy.com/checkout/buy/b3ba82d0-6bae-4528-b6c4-11b5b9732abc?embed=1" class="lemonsqueezy-button">Buy OTM Pack</a><script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
          </div>
          <div className="home__card--cardButons--buton">
            <h3>Product</h3>
            <a href="https://otmtrading.lemonsqueezy.com/checkout/buy/5bef45a3-6ee5-496d-8ea4-10d367e2535b" target="_blank">
              Boton
            </a>
          </div>


        </div>
      </div>
    </div>
  );
}
