import smarthomeImage from "../assets/smarthome.jpg";
import onboardImage from "../assets/onboard.png";
import bookingImage from "../assets/booking.png";
import juiceproductImage from "../assets/juice-product.png";

function Works() {
  return (
    <main className="Works" id="works">
      <article>
        <h2>Good design means good business</h2>
      </article>
      <article>
        <div className="card">
          <div className="icon">
            <img src={smarthomeImage} />
          </div>
          <div className="desc">
            <span className="category">Full stack application</span>
            <span className="name">Smart home dashboard</span>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={onboardImage} />
          </div>
          <div className="desc">
            <span className="category">UX/UI design</span>
            <span className="name">Onboard application</span>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={bookingImage} />
          </div>
          <div className="desc">
            <span className="category">Mobile application</span>
            <span className="name">Booking system</span>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <img src={juiceproductImage} />
          </div>
          <div className="desc">
            <span className="category">Front End applicati on</span>
            <span className="name">Juice product homepage</span>
          </div>
        </div>
        <a href="#works">
          see more <span class="material-icons">trending_flat</span>
        </a>
      </article>
    </main>
  );
}

export default Works;
