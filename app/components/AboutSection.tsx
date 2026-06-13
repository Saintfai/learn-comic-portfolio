export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="grid-container">
        <div className="col-5">
          <h2 className="rotate-text section-title">Origin Story</h2>
          <div className="hard-shadow hard-shadow-tertiary mt-4">
            <div className="comic-card">
              <div className="comic-card-header bg-blue">
                Secret Identity
              </div>
              <div className="comic-card-content">
                <p className="mb-2"><strong className="text-mono">Name:</strong> John Doe</p>
                <p className="mb-2"><strong className="text-mono">Base of Operations:</strong> New York City</p>
                <p><strong className="text-mono">Superpowers:</strong> React, Next.js, CSS Wizardry, UI Design</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="comic-card about-mission-card">
            <div className="kicker">Confidential</div>
            <h3 className="mission-title">The Mission</h3>
            <p className="mission-text">
              Bitten by a radioactive compiler, I gained the proportional speed and strength of a senior developer. 
              My mission is to rid the web of boring, template-based SaaS designs and bring back the raw energy of Golden Age comic books.
            </p>
            <p className="mission-text">
              I specialize in brutalist layouts, high-impact typography, and creating interfaces that feel physically printed rather than digitally rendered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
