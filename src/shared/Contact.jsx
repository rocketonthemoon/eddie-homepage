function Contact() {
  return (
    <div className="Contact" id="contact">
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
  );
}

export default Contact;
