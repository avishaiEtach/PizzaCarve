import "./AboutUsIntro.scss";

const galleryUrl = [
  "https://images.unsplash.com/photo-1564936281403-f92f66f89ee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbGlhbiUyMHBpenphJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1447279506476-3faec8071eee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbGlhbiUyMHBpenphJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1542834291-c514e77b215f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY0fHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1571705042748-55feda1cfadc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzkxfHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1651978595434-9fe13b011172?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGl0YWxpYW4lMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTEzfHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
  "https://images.unsplash.com/uploads/1412198485051133af17f/5049dacb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTUxfHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1517644493876-7864565e3bf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTk2fHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1530329650488-10f6eff05388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjA5fHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fHww",
];

export const AboutUsIntro = () => {
  return (
    <div data-aos="fade-up" className="about-us-intro-main-container">
      <div className="about-us-intro-gallery">
        {galleryUrl.map((url) => (
          <div key={url} style={{ backgroundImage: `url(${url})` }}></div>
        ))}
      </div>
      <div className="about-us-intro-section">
        <h2>
          Welcome to <span>Pizza Carve</span> – Where Every Slice is a Work of
          Art
        </h2>
        <p>
          At Pizza Carve, we craft pizzas that satisfy cravings and ignite taste
          buds. Our mission is simple: serve the cheesiest, most flavorful
          pizzas with a perfectly baked crust. From classic Margherita to
          gourmet creations, every pizza is made with passion and the freshest
          ingredients.
        </p>
        <p>
          Born from a love of pizza, we aim to bring more than just a meal—it’s
          an experience. Whether it’s a quick slice or a full pizza night, Pizza
          Carve is your spot for unforgettable flavors. Every bite is a
          celebration of joy, where quality and creativity reign supreme.
        </p>
        <p>
          Welcome to Pizza Carve, where every bite is a celebration of flavor,
          and the crust truly is king!
        </p>
      </div>
    </div>
  );
};
