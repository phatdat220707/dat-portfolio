const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Python",
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <div className="skillsGrid">
        {skills.map((skill) => (
          <span key={skill} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}