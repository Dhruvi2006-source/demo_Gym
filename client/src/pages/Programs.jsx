import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const programs = [
  {
    emoji: '🏋️', title: 'CrossFit Training', tag: 'High Intensity', tagColor: '#d4ff00',
    desc: 'CrossFit at Optimum Fitness combines strength training and cardiovascular conditioning in high-intensity workouts. Each session is scalable for all fitness levels.',
    features: ['Olympic weightlifting', 'Gymnastic movements', 'Metabolic conditioning', 'Professional coaching'],
    duration: '60 min', level: 'All Levels',
  },
  {
    emoji: '👥', title: 'Group Fitness', tag: 'Community', tagColor: '#00e5ff',
    desc: 'Group Fitness classes are a social, motivating way to exercise with like-minded individuals led by our expert instructors.',
    features: ['Multiple class formats', 'Small group sizes', 'Expert-led sessions', 'Community atmosphere'],
    duration: '45 min', level: 'Beginner–Intermediate',
  },
  {
    emoji: '🎯', title: 'Personal Training', tag: 'One-on-One', tagColor: '#ff6b35',
    desc: 'Personal Training offers one-on-one sessions with our certified trainers. Tailored workouts designed around your specific goals, fitness level, and schedule.',
    features: ['Custom workout plans', 'Nutrition guidance', 'Progress tracking', 'Flexible scheduling'],
    duration: '60 min', level: 'All Levels',
  },
  {
    emoji: '🤸', title: 'Flex & Move Program', tag: 'Mobility', tagColor: '#7c3aed',
    desc: 'The Flex & Move Program enhances your flexibility and mobility with targeted exercises. Ideal for anyone looking to prevent injury, improve posture, or recover.',
    features: ['Mobility exercises', 'Injury prevention', 'Posture correction', 'Stretch therapy'],
    duration: '45 min', level: 'Beginner–Advanced',
  },
]

export default function Programs() {
  return (
    <div>
      <section className="pt-40 pb-20 bg-page-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,255,0,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative">
          <span className="section-eyebrow">Our Programs</span>
          <h1 className="font-display font-black uppercase leading-none mb-4 text-5xl md:text-7xl">
            Unlock Your Best Self<br />with Our <span className="text-accent">Programs</span>
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            From high-intensity CrossFit to mindful movement programs — we have the perfect training program for your goals.
          </p>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="container flex flex-col gap-8">
          {programs.map((p, i) => (
            <div key={p.title}
              className={`grid lg:grid-cols-[1fr_2fr] gap-0 bg-surface border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-200 hover:border-accent/30 ${i % 2 !== 0 ? 'lg:grid-cols-[2fr_1fr]' : ''}`}>
              {/* Image side */}
              {i % 2 === 0 ? (
                <>
                  <div className="bg-bg-3 flex flex-col items-center justify-center p-12 gap-4">
                    <span className="text-7xl leading-none">{p.emoji}</span>
                    <div className="flex gap-2 flex-wrap justify-center">
                      <span className="tag">{p.duration}</span>
                      <span className="tag">{p.level}</span>
                    </div>
                  </div>
                  <div className="p-10 lg:p-14 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border mb-4"
                      style={{ color: p.tagColor, borderColor: `${p.tagColor}33`, background: `${p.tagColor}15` }}>
                      {p.tag}
                    </span>
                    <h2 className="text-3xl font-black mb-4">{p.title}</h2>
                    <p className="text-muted leading-relaxed mb-6">{p.desc}</p>
                    <ul className="flex flex-col gap-2.5 mb-8">
                      {p.features.map(f => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-muted">
                          <CheckCircle size={15} className="text-accent flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary self-start">Book a Session <ArrowRight size={15} /></Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-10 lg:p-14 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border mb-4"
                      style={{ color: p.tagColor, borderColor: `${p.tagColor}33`, background: `${p.tagColor}15` }}>
                      {p.tag}
                    </span>
                    <h2 className="text-3xl font-black mb-4">{p.title}</h2>
                    <p className="text-muted leading-relaxed mb-6">{p.desc}</p>
                    <ul className="flex flex-col gap-2.5 mb-8">
                      {p.features.map(f => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-muted">
                          <CheckCircle size={15} className="text-accent flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary self-start">Book a Session <ArrowRight size={15} /></Link>
                  </div>
                  <div className="bg-bg-3 flex flex-col items-center justify-center p-12 gap-4">
                    <span className="text-7xl leading-none">{p.emoji}</span>
                    <div className="flex gap-2 flex-wrap justify-center">
                      <span className="tag">{p.duration}</span>
                      <span className="tag">{p.level}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-bg-2 text-center">
        <div className="container">
          <h2 className="section-title">Not Sure Where to <span className="text-accent">Start?</span></h2>
          <p className="section-subtitle mx-auto mb-9">Our expert coaches will help you find the perfect program for your goals and fitness level.</p>
          <Link to="/contact" className="btn-primary">Get a Free Consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  )
}
