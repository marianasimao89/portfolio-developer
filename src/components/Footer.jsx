import githubIcon from "../assets/icons/github.png";

function Footer() {
  return (
    <footer className="footer">
      <p>Designed and coded by me.</p>

      <a
        href="https://github.com/yourusername/developer-portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="GitHub" />
        Open source on GitHub
      </a>
    </footer>
  );
}

export default Footer;
