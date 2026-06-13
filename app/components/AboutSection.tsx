import ComicCard from "./ComicCard";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding fade-in-up delay-100">
      <div className="grid-container">
        <div className="col-12">
          <div className="hard-shadow">
            <ComicCard className="newspaper-card">
              {/* Masthead */}
            <header className="newspaper-masthead">
              <div className="newspaper-issue-info">
                <span>VOL. 1 — NO. 1</span>
                <span>NEW YORK CITY</span>
                <span>PRICE: FREE</span>
              </div>
              <h2 className="newspaper-title">THE DAILY DEV</h2>
              <div className="newspaper-headline-banner">
                <h3>EXCLUSIVE: LOCAL DEV BITTEN BY RADIOACTIVE COMPILER!</h3>
              </div>
            </header>

            <div className="newspaper-content">
              {/* Left Column: Photo/Profile */}
              <div className="newspaper-sidebar">
                <div className="newspaper-photo-frame">
                  <div className="newspaper-photo-placeholder">
                    <span className="photo-text">MENACE OR HERO?</span>
                  </div>
                  <p className="newspaper-caption">Photo: John Doe caught in the act of building responsive UIs.</p>
                </div>
                <div className="newspaper-stats">
                  <h4 className="stats-title">CLASSIFIED FILES</h4>
                  <ul className="stats-list">
                    <li><strong>Alias:</strong> John Doe</li>
                    <li><strong>Base:</strong> New York City</li>
                    <li><strong>Powers:</strong> React, Next.js, CSS Wizardry, UI Design</li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Article */}
              <div className="newspaper-article">
                <h4 className="article-title">THE MISSION</h4>
                <div className="article-body">
                  <p>
                    <span className="dropcap">B</span>itten by a radioactive compiler, I gained the proportional speed and strength of a senior developer. My mission is to rid the web of boring, template-based SaaS designs and bring back the raw energy of Golden Age comic books.
                  </p>
                  <p>
                    I specialize in brutalist layouts, high-impact typography, and creating interfaces that feel physically printed rather than digitally rendered. When the city needs an interface that pops right off the screen, they know who to call.
                  </p>
                  <p>
                    With great power comes great responsibility. The responsibility to ensure perfect lighthouse scores, seamless animations, and accessibility for all citizens of the web.
                  </p>
                </div>
              </div>
            </div>
            </ComicCard>
          </div>
        </div>
      </div>
    </section>
  );
}
