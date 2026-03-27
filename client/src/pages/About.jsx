import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Award, Heart, Zap } from 'lucide-react'

const values = [
  { Icon: Zap, title: 'High Performance', desc: 'We push you to your limits and beyond, helping you achieve more than you thought possible.' },
  { Icon: Heart, title: 'Community First', desc: 'We are a family. Everyone is supported, motivated and celebrated regardless of fitness level.' },
  { Icon: Award, title: 'Expert Coaching', desc: 'All our trainers are certified professionals dedicated to your specific fitness journey.' },
  { Icon: CheckCircle, title: 'Results Driven', desc: 'We track your progress, adapt your plan, and ensure you see measurable results.' },
]

const milestones = [
  { year: '2013', event: 'Optimum Fitness founded in Anand, Gujarat' },
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,255,0,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative">
          <span className="section-eyebrow">Our Story</span>
          <h1 className="font-display font-black uppercase leading-none mb-4 text-5xl md:text-7xl">
            More Than a Gym.<br />A <span className="text-accent">Movement.</span>
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            Founded in Anand, Gujarat, Optimum Fitness has been transforming lives for over a decade through expert coaching, cutting-edge facilities, and an unbeatable community culture.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-bg">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="section-eyebrow">Our Mission</span>
            <h2 className="section-title">Making Fitness <span className="text-accent">Accessible</span> for All</h2>
            <p className="text-muted leading-relaxed mb-5">
              At Optimum Fitness, we believe that health is the ultimate wealth. Our mission is to provide world-class fitness facilities and expert coaching to every person who walks through our doors.
            </p>
            <p className="text-muted leading-relaxed mb-9">
              We've built a culture of encouragement and accountability where members don't just come to work out — they come to belong to something bigger.
            </p>
            <Link to="/contact" className="btn-primary">Start Your Journey <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '10+', label: 'Years of Excellence' },
              { num: '5000+', label: 'Happy Members' },
              { num: '2', label: 'Locations' },
              { num: '50+', label: 'Expert Trainers' },
            ].map(s => (
              <div key={s.label} className="card text-center py-10">
                <span className="font-display font-black text-5xl text-accent block leading-none mb-2">{s.num}</span>
                <span className="text-muted text-xs uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-bg-2">
        <div className="container">
          <span className="section-eyebrow">Why Optimum Fitness</span>
          <h2 className="section-title mb-12">Our Core <span className="text-accent">Values</span></h2>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="card flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-bg">
        <div className="container">
          <span className="section-eyebrow">Our History</span>
          <h2 className="section-title mb-14">Our <span className="text-accent">Journey</span></h2>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-px hidden md:block" />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 flex justify-end md:pr-10">
                    {i % 2 === 0 ? (
                      <div className="card max-w-xs">
                        <p className="text-muted text-sm">{m.event}</p>
                      </div>
                    ) : (
                      <span className="font-display font-black text-2xl text-accent hidden md:block">{m.year}</span>
                    )}
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-accent border-4 border-bg flex-shrink-0 shadow-[0_0_0_3px_#d4ff00]" />
                  <div className="flex-1 md:pl-10">
                    {i % 2 !== 0 ? (
                      <div className="card max-w-xs">
                        <p className="text-muted text-sm">{m.event}</p>
                      </div>
                    ) : (
                      <span className="font-display font-black text-2xl text-accent hidden md:block">{m.year}</span>
                    )}
                  </div>
                  {/* Mobile: show both */}
                  <div className="md:hidden flex items-start gap-4 w-full">
                    <span className="font-display font-black text-xl text-accent w-14 flex-shrink-0">{m.year}</span>
                    <div className="card flex-1"><p className="text-muted text-sm">{m.event}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-2 text-center">
        <div className="container">
          <h2 className="section-title">Ready to Write Your <span className="text-accent">Success Story?</span></h2>
          <p className="section-subtitle mx-auto mb-9">Join thousands of members who have transformed their lives at Optimum Fitness.</p>
          <Link to="/contact" className="btn-primary">Get Started Today <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  )
}
