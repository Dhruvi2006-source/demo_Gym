import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Dumbbell } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 border-b border-white/[0.06]" : "py-5"
      }`}
      style={{
        background: scrolled ? "rgba(6,8,13,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
      }}
    >
      <div className="container flex items-center gap-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-lg font-bold uppercase tracking-wide text-gray-50 flex-shrink-0"
        >
          <Dumbbell
            size={24}
            strokeWidth={2.5}
            className="text-accent"
            style={{ filter: "drop-shadow(0 0 8px rgba(0,240,255,0.4))" }}
          />
          <span>
            Apex<strong className="text-accent">Fitness</strong>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1 flex-1"
          aria-label="Main navigation"
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-accent bg-accent/8"
                    : "text-muted hover:text-gray-100 hover:bg-white/[0.05]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3 ml-auto">
          <Link
            to="/contact"
            className="btn-primary hidden sm:inline-flex px-6 py-2.5 text-xs"
          >
            Join Now
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-50 rounded-lg hover:bg-white/[0.06] transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-[500px]" : "max-h-0"}`}
      >
        <div
          className="flex flex-col gap-1 px-6 py-4 border-t border-white/[0.06]"
          style={{
            background: "rgba(6,8,13,0.95)",
            backdropFilter: "blur(24px)",
          }}
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "text-accent bg-accent/8"
                    : "text-muted hover:text-gray-100 hover:bg-white/[0.05]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary mt-3 justify-center">
            Join Now
          </Link>
        </div>
      </div>
    </header>
  );
}
