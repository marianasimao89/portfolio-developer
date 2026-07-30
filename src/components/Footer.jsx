import githubIcon from "../assets/icons/github.png";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed and coded by me
        <a
          href="https://github.com/marianasimao89/portfolio-developer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
          Open source on GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
