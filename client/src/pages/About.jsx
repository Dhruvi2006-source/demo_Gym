import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Award, Heart, Zap } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const values = [
  { Icon: Zap, title: 'High Performance', desc: 'We push you to your limits and beyond, helping you achieve more than you thought possible.' },
  { Icon: Heart, title: 'Community First', desc: 'We are a family. Everyone is supported, motivated and celebrated regardless of fitness level.' },
  { Icon: Award, title: 'Expert Coaching', desc: 'All our trainers are certified professionals dedicated to your specific fitness journey.' },
  { Icon: CheckCircle, title: 'Results Driven', desc: 'We track your progress, adapt your plan, and ensure you see measurable results.' },
]

const milestones = [
  { year: '2013', event: 'Apex Fitness founded in Anand, Gujarat' },
  { year: '2016', event: 'Expanded with second location in Nadiad' },
  { year: '2019', event: 'Introduced specialized Zumba & Yoga programs' },
  { year: '2021', event: 'Hit 3,000 active member milestone' },
  { year: '2024', event: 'Launched online coaching & free fitness guides' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-page-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,255,0.04) 0%, transparent 70%)' }} />
        <div className="container relative">
          <ScrollReveal>
            <span className="section-eyebrow">Our Story</span>
            <h1 className="font-display uppercase leading-[0.95] mb-5 text-5xl md:text-7xl">
              More Than a Gym.<br />A <span className="text-gradient">Movement.</span>
            </h1>
            <p className="text-muted text-lg max-w-xl leading-relaxed">
              Founded in Anand, Gujarat, Apex Fitness has been transforming lives for over a decade through expert coaching, cutting-edge facilities, and an unbeatable community culture.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-bg">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal>
            <div>
              <span className="section-eyebrow">Our Mission</span>
              <h2 className="section-title">Making Fitness <span className="text-accent">Accessible</span> for All</h2>
              <p className="text-muted leading-relaxed mb-5">
                At Apex Fitness, we believe that health is the ultimate wealth. Our mission is to provide world-class fitness facilities and expert coaching to every person who walks through our doors.
              </p>
              <p className="text-muted leading-relaxed mb-9">
                We've built a culture of encouragement and accountability where members don't just come to work out — they come to belong to something bigger.
              </p>
              <Link to="/contact" className="btn-primary">Start Your Journey <ArrowRight size={16} /></Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-5">
            {[
              { num: '10+', label: 'Years of Excellence' },
              { num: '5000+', label: 'Happy Members' },
              { num: '2', label: 'Locations' },
              { num: '50+', label: 'Expert Trainers' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="card text-center py-11 h-full">
                  <span className="font-display text-5xl block leading-none mb-2"
                    style={{ background: 'linear-gradient(135deg, #00f0ff, #7c3aff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {s.num}
                  </span>
                  <span className="text-muted text-xs uppercase tracking-widest">{s.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #0a0e18 0%, #06080d 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <span className="section-eyebrow">Why Apex Fitness</span>
            <h2 className="section-title mb-14">Our Core <span className="text-accent">Values</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map(({ Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div className="card flex items-start gap-5 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-accent flex-shrink-0"
                    style={{ background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.15)' }}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-bg">
        <div className="container">
          <ScrollReveal>
            <span className="section-eyebrow">Our History</span>
            <h2 className="section-title mb-16">Our <span className="text-accent">Journey</span></h2>
          </ScrollReveal>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px hidden md:block"
              style={{ background: 'linear-gradient(180deg, rgba(0,240,255,0.2), rgba(124,58,255,0.1), transparent)' }} />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 0.1}>
                  <div className="flex items-center gap-8 md:flex-row">
                    <div className="flex-1 flex justify-end md:pr-10">
                      {i % 2 === 0 ? (
                        <div className="card max-w-xs w-full">
                          <p className="text-muted text-sm">{m.event}</p>
                        </div>
                      ) : (
                        <span className="font-display text-2xl hidden md:block"
                          style={{ background: 'linear-gradient(135deg, #00f0ff, #7c3aff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                          {m.year}
                        </span>
                      )}
                    </div>
                    {/* Dot */}
                    <div className="hidden md:flex w-4 h-4 rounded-full flex-shrink-0"
                      style={{ background: '#00f0ff', border: '4px solid #06080d', boxShadow: '0 0 0 2px #00f0ff, 0 0 15px rgba(0,240,255,0.4)' }} />
                    <div className="flex-1 md:pl-10">
                      {i % 2 !== 0 ? (
                        <div className="card max-w-xs w-full">
                          <p className="text-muted text-sm">{m.event}</p>
                        </div>
                      ) : (
                        <span className="font-display text-2xl hidden md:block"
                          style={{ background: 'linear-gradient(135deg, #00f0ff, #7c3aff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                          {m.year}
                        </span>
                      )}
                    </div>
                    {/* Mobile: show both */}
                    <div className="md:hidden flex items-start gap-4 w-full">
                      <span className="font-display text-xl text-accent w-14 flex-shrink-0">{m.year}</span>
                      <div className="card flex-1"><p className="text-muted text-sm">{m.event}</p></div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(180deg, #0a0e18 0%, #06080d 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Ready to Write Your <span className="text-accent">Success Story?</span></h2>
            <p className="section-subtitle mx-auto mb-10">Join thousands of members who have transformed their lives at Apex Fitness.</p>
            <Link to="/contact" className="btn-primary">Get Started Today <ArrowRight size={16} /></Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
