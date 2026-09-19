import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Footer from "./Footer";
const nav = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];
export default function Layout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main className={pathname === "/about" ? "about-page" : ""}>
      <nav className="nav-wrap" aria-label="Main navigation">
        <Link className="logo" to="/" onClick={closeMenu}>
          BD<span>®</span>
        </Link>
        <div className="nav-links">
          {nav.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </div>
        <button
          className="menu-button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {menuOpen && (
          <div className="mobile-menu">
            {nav.map(([label, to]) => (
              <NavLink key={to} to={to} end={to === "/"} onClick={closeMenu}>
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
      <Outlet />
      <Footer />
    </main>
  );
}
