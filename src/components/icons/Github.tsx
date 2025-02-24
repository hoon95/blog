import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GithubIcon() {
  return (
    <a
      href="https://github.com/hoon95"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 hover:text-gray-600 w-8 h-8"
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
  );
}
