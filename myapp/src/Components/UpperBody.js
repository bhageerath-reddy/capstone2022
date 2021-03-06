import spechome from "../images/spec.png";
const UpperBody = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="left-col">
          <p className="subhead">One stop for your Eye wear</p>
          <h1>Best Selling Collections</h1>
          <div className="hero-cta">
            <a href="/shop" className="primary-cta">
              Buy Now
            </a>
          </div>
        </div>
        <img src={spechome} className="hero-img" alt="illustration" />
      </div>
    </section>
  );
};

export default UpperBody;
