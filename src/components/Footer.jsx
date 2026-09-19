import { Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="site-footer section-pad">
      <span>© 2026 Biswajit Debnath</span>
      <div>
        <a href="https://github.com/biswajitAnhad" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          GH
        </a>
        <a href="https://www.linkedin.com/in/biswajit-debnath-585847190" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          IN
        </a>
        <a href="mailto:biswajitdebnath249@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
          <Mail size={16} />
        </a>
      </div>
      <span>Built with care</span>
    </footer>
  );
}
