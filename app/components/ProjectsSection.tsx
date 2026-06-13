export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="grid-container">
        <div className="col-12 text-center projects-title-container">
          <h2 className="rotate-text-alt projects-title">
            Latest Issues
          </h2>
        </div>
        
        <div className="col-4">
          <div className="hard-shadow hard-shadow-primary h-full">
            <div className="comic-card">
              <div className="kicker">Issue #1</div>
              <div className="comic-card-header bg-red">
                E-Commerce Redux
              </div>
              <div className="comic-card-content">
                <div className="heavy-border project-image-placeholder"></div>
                <p className="mb-4">A complete overhaul of a boring shopping site into a dynamic, engaging storefront.</p>
                <div>
                  <span className="chip new">React</span>
                  <span className="chip">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="hard-shadow hard-shadow-tertiary h-full">
            <div className="comic-card">
              <div className="kicker">Issue #2</div>
              <div className="comic-card-header bg-blue">
                SaaS Dashboard
              </div>
              <div className="comic-card-content">
                <div className="heavy-border project-image-placeholder"></div>
                <p className="mb-4">Data visualization doesn't have to be dull. High contrast charts and brutalist controls.</p>
                <div>
                  <span className="chip urgent">Next.js</span>
                  <span className="chip">D3.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="hard-shadow hard-shadow-primary h-full">
            <div className="comic-card">
              <div className="kicker">Issue #3</div>
              <div className="comic-card-header bg-black">
                Web3 Portal
              </div>
              <div className="comic-card-content">
                <div className="heavy-border project-image-placeholder"></div>
                <p className="mb-4">Connecting to the blockchain with maximum visual impact and structural honesty.</p>
                <div>
                  <span className="chip info">Web3</span>
                  <span className="chip">Ethers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
