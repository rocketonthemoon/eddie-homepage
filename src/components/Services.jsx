function Services() {
  return (
    <main className="Services" id="services">
      <article>
        <h2>We offer high demand services</h2>
      </article>
      <article>
        <div className="card">
          <div className="icon">
            <span className="material-icons">edit</span>
          </div>
          <h3>UI/UX Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <div className="button secondary">Get started</div>
        </div>
        <div className="card">
          <div className="icon">
            <span className="material-icons">code</span>
          </div>
          <h3>Front End</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <div className="button primary">Get started</div>
        </div>
        <div className="card">
          <div className="icon">
            <span className="material-icons">storage</span>
          </div>
          <h3>Back End</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <div className="button secondary">Get started</div>
        </div>
      </article>
    </main>
  );
}

export default Services;
