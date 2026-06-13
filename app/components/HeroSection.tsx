export default function HeroSection() {
  return (
    <section className="hero-section shear-bottom fade-in-up">
      <div className="grid-container">
        <div className="col-8">
          <h1 className="hero-title rotate-text">
            <span className="text-stroke">The Heavy Ink</span>
            <br />
            <span style={{ color: "var(--color-spiderman-red)" }}>Developer</span>
          </h1>
          <p className="hero-subtitle">
            Building aggressive, high-contrast web experiences that break the grid and command attention.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary rotate-text-alt">Hire Me Now!</a>
            <a href="#projects" className="btn btn-secondary">View Comics</a>
          </div>
        </div>
        <div className="col-4">
          <div className="hard-shadow hard-shadow-primary rotate-text-alt hero-illustration-container">
            <div className="heavy-border hero-illustration-box">
              <div className="hero-illustration-text">
                [ Hero Illustration ]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
