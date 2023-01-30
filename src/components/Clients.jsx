import person4Image from "../assets/person4.png";

function Clients() {
  return (
    <main className="Clients" id="clients">
      <article>
        <h2 className="quote">
          “Fast and outstanding resutls. Edie understands their customer’s
          needs. They have a young and talented team.”
        </h2>
        <div className="about">
          <div className="photo">
            <img src={person4Image} />
          </div>
          <div className="desc">
            <p className="name">Carlos Tran</p>
            <p className="company">The Decorate Gatsby</p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Clients;
