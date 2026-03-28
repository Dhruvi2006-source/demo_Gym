import { Link } from 'react-router-dom'
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programs', label: 'Programs' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact' },
]

const programs = [
  'CrossFit Training', 'Personal Training', 'Group Fitness',
  'Zumba Classes', 'Yoga & Wellness', 'Flex & Move Program',
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]" style={{ background: 'linear-gradient(180deg, #0a0e18 0%, #06080d 100%)' }}>
      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,240,255,0.05) 0%, transparent 70%)' }} />

      <div className="container relative">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-bold uppercase mb-5">
              <Dumbbell size={26} strokeWidth={2.5} className="text-accent" style={{ filter: 'drop-shadow(0 0 8px rgba(0,240,255,0.4))' }} />
              <span>Apex<strong className="text-accent">Fitness</strong></span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-7">
              Transform your body, elevate your mind. Join thousands who've unlocked their peak potential at Apex Fitness.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-muted transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-1"
                  style={{ backdropFilter: 'blur(8px)' }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[3px] uppercase text-gray-100 mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="flex items-center gap-2 text-sm text-muted transition-all duration-300 hover:text-accent hover:gap-3 group">
                    <ArrowRight size={12} className="text-accent/50 group-hover:text-accent transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[3px] uppercase text-gray-100 mb-6">Get In Touch</h4>
            <ul className="flex flex-col gap-4 mb-6">
              {[
                { Icon: MapPin, lines: ['Anand & Nadiad, Gujarat, India'] },
                { Icon: Phone, lines: ['+91 98989 89898'] },
                { Icon: Mail, lines: ['info@apexfitness.co.in'] },
              ].map(({ Icon, lines }) => (
                <li key={lines[0]} className="flex items-start gap-3">
                  <Icon size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    {lines.map(l => <p key={l} className="text-sm text-muted">{l}</p>)}
                  </div>
                </li>
              ))}
            </ul>
            <span className="tag mb-2 block w-fit">Hours</span>
            <p className="text-xs text-muted leading-relaxed">Mon – Sat: 5:30 AM – 10:00 PM</p>
            <p className="text-xs text-muted">Sunday: 7:00 AM – 8:00 PM</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-6 text-xs text-dim">
          <p>&copy; {year} Apex Fitness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
