import profilePhoto from "../assets/mariana.jpeg";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";

function Hero() {
  return (
    <section className="hero-container">
      <p className="hero-introduction">👋hi </p>
      <div className="hero-introduction-name">I'm_Mariana</div>

      <div className="hero-image">
        <img src={profilePhoto} alt="Portrait of Mariana" />
      </div>

      <h1 className="hero-title">Junior Front-End Developer</h1>
      <div className="hero-subtitle">with a strong visual eye ✏️</div>

      <div className="hero-description">
        I build responsive websites and React applications <br /> with
        intuitive, user-friendly interfaces 👩‍💻
      </div>

      <div className="hero-role">
        🔎 Currently seeking a remote Junior Front-End Developer role
      </div>

      <div className="hero-links">
        <a
          href="https://github.com/marianasimao89"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.linkedin.com/in/marianasimao/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
