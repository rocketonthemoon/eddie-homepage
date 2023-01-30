import heroImage from "../assets/heroImage.jpg";
import Contact from "../shared/Contact";

function Home() {
  return (
    <main className="Home" id="home">
      <article>
        <span className="un-happy">Unhappy with your website?</span>
        <h1>We create beautiful and fast web services</h1>
      </article>
      <article>
        <img src={heroImage} />
      </article>
      <article>
        <h1>Story, emotion and purpose</h1>
        <p>
          We help transform your ideas into real world applications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>
        <Contact />
      </article>
    </main>
  );
}

export default Home;
