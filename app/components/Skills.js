
const skillGroups = [
  {
    title: "Programming & Development",
    skills: [
      "Python",
      "C++",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML & CSS",
      "Git & GitHub",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Generative AI",
      "Explainable AI (XAI)",
      "Vision-Language Models",
      "Model Evaluation",
      "scikit-learn",
    ],
  },
  {
    title: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Probability & Statistics",
      "Software Development",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2>Technical Skills</h2>

      {skillGroups.map((group) => (
        <div key={group.title} style={{ marginBottom: "28px" }}>
          <h3 style={{ marginBottom: "14px" }}>
            {group.title}
          </h3>

          <div className="skillsGrid">
            {group.skills.map((skill) => (
              <span key={skill} className="skill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
