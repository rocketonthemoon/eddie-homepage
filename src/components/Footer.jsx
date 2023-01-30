import Contact from "../shared/Contact";

function Footer() {
  return (
    <footer>
      <div className="foot-nav">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#works">Our Works</a>
        </li>
        <li>
          <a href="#clients">Clients</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </div>
      <div className="foot-social">
        <div className="logo">
          <a href="#">Edie</a>
        </div>
        <div className="social">
          <a href="#">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </div>
      </div>
      <Contact />
    </footer>
  );
}

export default Footer;
