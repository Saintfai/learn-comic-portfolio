import ComicCard from "./ComicCard";
import { portfolioData } from "../data/portfolio";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  
  // Design elements mapped to project index
  const themeColors = ["bg-red", "bg-blue", "bg-black"];
  const shadowClasses = ["hard-shadow-primary", "hard-shadow-tertiary", "hard-shadow-primary"];
  const tagClasses = ["new", "urgent", "info"];

  return (
    <section id="projects" className="projects-section fade-in-up delay-200 speed-lines speed-lines-blue">
      {/* Decorative Background Bubbles */}
      <div className="bg-decorations">
        <div className="decor-caption" style={{ top: "6%", left: "2%" }}>
          LATEST ISSUES ON SALE...
        </div>
        <div className="decor-burst-wrap float-slower" style={{ top: "15%", left: "2%" }}>
          <div className="decor-burst decor-burst-blue">WHAM!</div>
        </div>
        <div className="decor-symbol decor-symbol-blue float-slow" style={{ top: "40%", right: "2%" }}>
          *#@!
        </div>
        <div className="decor-burst-wrap float-slow" style={{ bottom: "10%", left: "2%" }}>
          <div className="decor-burst decor-burst-red">BOOM!</div>
        </div>
        <div className="decor-bubble decor-speech float-slow" style={{ bottom: "15%", right: "2%" }}>
          MUST SEE ISSUES!
        </div>
      </div>
      <div className="grid-container">
        <div className="col-12 text-center projects-title-container">
          <h2 className="rotate-text-alt projects-title">
            Latest Issues
          </h2>
        </div>
        
        {projects.map((project, index) => {
          const themeColor = themeColors[index % themeColors.length];
          const shadowClass = shadowClasses[index % shadowClasses.length];
          const primaryTagClass = tagClasses[index % tagClasses.length];

          return (
            <div className="col-4" key={project.id}>
              <div className={`hard-shadow h-full ${shadowClass}`}>
                <ComicCard>
                  <div className="kicker">Issue #{index + 1}</div>
                  <div className={`comic-card-header ${themeColor}`}>
                    {project.title}
                  </div>
                  <div className="comic-card-content">
                    <div className="heavy-border project-image-placeholder"></div>
                    <p className="mb-4">{project.description}</p>
                    <div>
                      {project.techStack.map((tech, idx) => (
                        <span className={`chip ${idx === 0 ? primaryTagClass : ""}`} key={idx}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </ComicCard>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
