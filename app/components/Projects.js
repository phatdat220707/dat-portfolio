
const projects = [
  {
    title: "Voices of the North — HumanLoop",
    description:
      "An AI-powered Cantonese oral-history preservation platform featuring speech transcription, audio-aligned storytelling, and source-grounded question answering. Our team received the Silver Prize at the Inter-University GenAI Hackathon for SDGs 2026.",
    role: "Team Lead & Product/Pitch Lead",
    tech: "Generative AI · Speech Recognition · RAG · Product Development",
    github: "https://github.com/buwanmihayou/voices-of-the-north",
    demo: null,
  },
  {
    title: "Credit Risk Scoring Baseline",
    description:
      "A machine learning project using the UCI German Credit dataset. Compared Logistic Regression and Random Forest, evaluated performance using cross-validation, and explored cost-sensitive decision threshold tuning and model interpretation.",
    role: "ML Project Development",
    tech: "Python · scikit-learn · Machine Learning · FastAPI",
    github: "https://github.com/phatdat220707/credit-risk-scoring-baseline",
    demo: null,
  },
  {
    title: "GuardCart — HacKU 2026",
    description:
      "A policy-controlled shopping agent prototype separating product recommendations from transaction authorization. Built a deterministic Policy Engine supporting APPROVE, ASK, and BLOCK decisions, with policy checks and audit events. Uses simulated commerce data and does not execute real payments.",
    role: "Policy Engine, Repository Integration & Final QA",
    tech: "Python · FastAPI · Policy Engine · AI Safety · JavaScript",
    github: "https://github.com/phatdat220707/guardcart-hacku2026",
    demo: "https://statuesque-squirrel-5ac82e.netlify.app",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Featured Projects</h2>

      <div className="projectsGrid">
        {projects.map((project) => (
          <article key={project.title} className="projectCard">
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>My Role:</strong> {project.role}
            </p>

            <span>{project.tech}</span>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginTop: "20px",
              }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source →
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
