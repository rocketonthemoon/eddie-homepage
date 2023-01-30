import person1Image from "../assets/person1.png";
import person2Image from "../assets/person2.png";
import person3Image from "../assets/person3.png";

function Teams() {
  return (
    <main className="Teams" id="teams">
      <article>
        <p>Meet the team</p>
        <h2>We are chilled and a laidback team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </article>
      <article>
        <div className="card">
          <img src={person3Image} />
        </div>
        <div className="card">
          <img src={person1Image} />
        </div>
        <div className="card">
          <img src={person2Image} />
        </div>
      </article>
    </main>
  );
}

export default Teams;
