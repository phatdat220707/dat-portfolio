const projects = [
  {
    title: "Git Practice Project",
    description:
      "A small practice project where I learned Git basics, branching, merge conflicts, .gitignore, and pushing code to GitHub.",
    tech: "HTML, Git, GitHub",
  },
  {
    title: "Bank Account OOP Practice",
    description:
      "A Python project for practicing object-oriented programming concepts such as classes, encapsulation, methods, and composition.",
    tech: "Python, OOP",
  },
  {
    title: "React Learning App",
    description:
      "A collection of React exercises covering components, props, state, events, forms, and fetching data from an API.",
    tech: "React, JavaScript",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="projectsGrid">
        {projects.map((project) => (
          <article key={project.title} className="projectCard">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
          </article>
        ))}
      </div>
    </section>
  );
}