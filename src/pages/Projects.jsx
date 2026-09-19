import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectGrid from "../components/ProjectGrid";
export default function Projects() {
  return (
    <section className="projects section-pad page-section">
      <div className="section-heading">
        <h1 className="section-title">
          Projects<span> .</span>
        </h1>
        <p>
          A handful of things
          <br />
          I’ve helped bring to life.
        </p>
      </div>
      <ProjectGrid />
      <Link className="text-link" to="/contact">
        More work, on request <ArrowUpRight size={17} />
      </Link>
    </section>
  );
}
