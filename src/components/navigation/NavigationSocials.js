import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Codepen from "../../assets/images/socials/codepen-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="navigation__socials">
      <a
        href="https://github.com/michelledagsa"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="GitHub" />
      </a>
    </section>
  );
};

export default NavigationSocials;
