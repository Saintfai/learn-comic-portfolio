export default function ContactSection() {
  return (
    <section id="contact" className="contact-section fade-in-up delay-300">
      <div className="grid-container">
        <div className="col-6">
          <h2 className="rotate-text contact-title">
            Send a<br/><span className="contact-highlight">Signal</span>
          </h2>
          <p className="contact-description">
            Need a hero for your next project? Fill out the form or send a message via the nearest Bat-Signal (or email).
          </p>
          <ul className="comic-list mt-4">
            <li>
              <span className="contact-list-label">EMAIL</span>
              <span>hero@graphicmultiverse.com</span>
            </li>
            <li>
              <span className="contact-list-label">GITHUB</span>
              <span>@heavyink</span>
            </li>
            <li>
              <span className="contact-list-label">TWITTER</span>
              <span>@brutalistweb</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="hard-shadow hard-shadow-tertiary">
            <form className="comic-card contact-form-card">
              <div className="input-group">
                <label className="comic-label" htmlFor="name">Your Name</label>
                <input type="text" id="name" className="comic-input" placeholder="Peter Parker" />
              </div>
              <div className="input-group">
                <label className="comic-label" htmlFor="email">Your Email</label>
                <input type="email" id="email" className="comic-input" placeholder="spider@dailybugle.com" />
              </div>
              <div className="input-group">
                <label className="comic-label" htmlFor="message">Message</label>
                <textarea id="message" className="comic-input" rows={4} placeholder="We need your help!"></textarea>
              </div>
              <div className="submit-btn-container">
                <button type="button" className="btn btn-primary w-full">Transmit Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
