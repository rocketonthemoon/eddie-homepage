import heroImage from "../assets/heroImage.jpg";

function Home() {
  return (
    <main className="Home">
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
        <div className="Contact">
          <p>Want us to contact you?</p>
          <div className="input-field">
            <input type="email" placeholder="Email" id="email" />
            <input
              type="submit"
              value="Join"
              className="button primary"
              id="submit-btn"
            />
          </div>
        </div>
      </article>
    </main>
  );
}

export default Home;
