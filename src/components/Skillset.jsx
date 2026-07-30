import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import javascriptIcon from "../assets/icons/javascript.png";
import reactIcon from "../assets/icons/react.png";
import vscodeIcon from "../assets/icons/vscode.png";
import githubIcon from "../assets/icons/github.png";
import hostingIcon from "../assets/icons/hosting.png";
import apiIcon from "../assets/icons/api.png";
import aiIcon from "../assets/icons/ai.png";
import gitIcon from "../assets/icons/git.png";
import bootstrapIcon from "../assets/icons/bootstrap.png";
import seoIcon from "../assets/icons/seo.png";
import responsiveIcon from "../assets/icons/responsive.png";

const skills = [
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
  },
  {
    name: "React.js",
    icon: reactIcon,
  },
  {
    name: "VS Code",
    icon: vscodeIcon,
  },
  {
    name: "GitHub",
    icon: githubIcon,
  },
  {
    name: "Hosting",
    icon: hostingIcon,
  },
  {
    name: "API",
    icon: apiIcon,
  },
  {
    name: "AI",
    icon: aiIcon,
  },
  {
    name: "Git",
    icon: gitIcon,
  },
  {
    name: "Bootstrap",
    icon: bootstrapIcon,
  },
  {
    name: "SEO",
    icon: seoIcon,
  },
  {
    name: "Responsive",
    icon: responsiveIcon,
  },
];

function Skillset() {
  return (
    <section className="skillset">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skillset;
