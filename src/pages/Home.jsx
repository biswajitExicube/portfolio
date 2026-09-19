import { ArrowDownRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProjectGrid from "../components/ProjectGrid";

const technologies = [
  {
    name: "ReactJS",
    detail: "Reusable component systems for fast, interactive interfaces with clear state management.",
  },
  {
    name: "NextJS",
    detail: "Production-ready web applications with server rendering, routing, and performance-minded delivery.",
  },
  {
    name: "Angular",
    detail: "Structured dashboard and business application interfaces built around maintainable application architecture.",
  },
  {
    name: "HTML5",
    detail: "Semantic, accessible page foundations that work reliably across devices and assistive technologies.",
  },
  {
    name: "CSS3",
    detail: "Responsive layouts, thoughtful motion, and visual detail that make product experiences feel polished.",
  },
  {
    name: "Bootstrap",
    detail: "Consistent responsive UI foundations for delivering clean interfaces efficiently.",
  },
];
export default function Home() {
  const [openTechnology, setOpenTechnology] = useState(0);

  return (
    <>
      <section className="hero section-pad">
        <div className="eyebrow">
          <span /> AVAILABLE FOR SELECT PROJECTS
        </div>
        <div className="hero-title">
          <h1>
            Digital experiences
            <br />
            with <em>purpose.</em>
          </h1>
          <div className="hero-note">
            Frontend developer &amp; creative
            <br />
            problem solver .
          </div>
        </div>
        <div className="hero-bottom">
          <p>
            I create thoughtful interfaces where clarity
            <br className="desktop-only" /> meets character.
          </p>
          <a
            className="round-arrow"
            href="#home-projects"
            aria-label="See selected work"
          >
            <ArrowDownRight size={25} />
          </a>
        </div>
        <div className="hero-orb orb-one" >
          <img src="/assets/images/author-pic.png" alt="Hero Orb" />
        </div>
        <div className="hero-orb orb-two" />
      </section>
      <section id="home-projects" className="projects section-pad">
        <div className="section-heading">
          <h2 className="section-title">Projects<span> .</span></h2>
          <p>
            A few things
            <br />
            I’ve brought to life.
          </p>
        </div>
        <ProjectGrid />
        <Link className="text-link" to="/projects">
          View all projects <ArrowUpRight size={17} />
        </Link>
      </section>
      <section className="experience-section section-pad">
        <h2 className="section-title">Experience<span> .</span></h2>
        <div>
          <h3>Building reliable interfaces with the tools teams trust.</h3>
          <p>
            From fast marketing pages to product dashboards, I turn ideas into
            responsive, accessible experiences that are simple to maintain.
          </p>
        </div>
        <div className="technology-accordion">
          {technologies.map((technology, index) => (
            <article className="technology-item" key={technology.name}>
              <button
                type="button"
                className="technology-trigger"
                aria-expanded={openTechnology === index}
                aria-controls={`technology-panel-${index}`}
                onClick={() => setOpenTechnology(openTechnology === index ? null : index)}
              >
                <span>0{index + 1}</span>
                <strong>{technology.name}</strong>
                <ChevronDown size={21} aria-hidden="true" />
              </button>
              <div
                id={`technology-panel-${index}`}
                className="technology-panel"
                hidden={openTechnology !== index}
              >
                <p>{technology.detail}</p>
                {/* <small>Modern frontend development</small> */}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="skills-section section-pad">
        <h2 className="section-title">Skills<span> .</span></h2>
        <div className="skill-groups">
          <article>
            <h3>Web Design</h3>
            <ul><li>UI/UX Design</li><li>Responsive Design</li><li>Wireframing</li><li>User Research</li></ul>
          </article>
          <article>
            <h3>Frontend</h3>
            <ul><li>Javascript</li><li>ReactJS</li><li>NextJS</li><li>CSS3</li></ul>
          </article>
          <article>
            <h3>Backend</h3>
            <ul><li>Node.Js</li><li>MongoDB</li><li>ExpressJS</li></ul>
          </article>
          <article>
            <h3>Soft Skills</h3>
            <ul><li>Effective communication</li><li>Coordination</li><li>Commitment</li><li>Leadership</li></ul>
          </article>
        </div>
      </section>
      <section className="story-section section-pad">
        <h2 className="section-title">Story<span> .</span></h2>
        <div>
          <h3>
            Curious by nature,
            <br />
            <em>intentional</em> by practice.
          </h3>
          <p>
            I started building for the web because I loved the meeting point of
            logic and visual craft. Today I partner with founders and teams to
            make their ideas feel clear, useful, and unmistakably their own.
          </p>
          <Link className="underlink" to="/about">
            More about me <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
