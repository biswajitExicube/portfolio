import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
const projects = [
  {
    number: "01",
    title: "Highloka",
    type: "Discover New Sounds . 2025",
    image: "/assets/images/highloka-banner.png",
    alt: "Highloka",
  },  
  {
    number: "02",
    title: "Health Risk Exam",
    type: "Laboratory Management System · 2024",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85",
    alt: "Health Risk Exam",
  },
  {
    number: "03",
    title: "Marketing Piece Portal",
    type: "Marketing platform · 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    alt: "Marketing analytics dashboard on a laptop screen",
  },
  {
    number: "04",
    title: "Practice 2 Lab",
    type: "Laboratory Management System · 2023",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    alt: "Practice 2 Lab",
  },
  {
    number: "05",
    title: "Aasthica Pharmacy",
    type: "Medicine e-commerce · 2022",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=85",
    alt: "Pharmacy medicine bottles and containers",
  },
  {
    number: "06",
    title: "Buchheit",
    type: "Based On E-Commerce · 2022",
    image: "/assets/images/buchheit-banner.png",
    alt: "Explore The Possibilities of a Simple Lift",
  },
];
export default function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project" key={project.title}>
          <div className="project-art">
            <img src={project.image} alt={project.alt} />
          </div>
          <div className="project-meta">
            <div>
              <span>{project.number}</span>
              <h3>{project.title}</h3>
            </div>
            <p>{project.type}</p>
            <Link to="/contact" aria-label={`Discuss ${project.title}`}>
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
