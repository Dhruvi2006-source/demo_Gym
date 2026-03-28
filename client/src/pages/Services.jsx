import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const services = [
  { emoji: '💃', title: 'Zumba', tag: 'Dance Fitness', desc: 'Dance your way to fitness in our high-energy Zumba classes, combining Latin rhythms with cardio fitness moves.', benefits: ['Burns up to 600 cal/hour', 'Improves coordination', 'Reduces stress levels', 'Suitable for all ages'], schedule: 'Mon, Wed, Fri – 7:00 PM' },
  { emoji: '🏃', title: 'Aerobics', tag: 'Cardio', desc: 'Improve cardiovascular health with our dynamic aerobic sessions designed to burn calories and boost stamina.', benefits: ['Improves heart health', 'Boosts metabolism', 'Builds endurance', 'Weight management'], schedule: 'Tue, Thu – 6:00 AM & 6:00 PM' },
  { emoji: '🧘', title: 'Yoga', tag: 'Wellness', desc: 'Rejuvenate body and mind through traditional and modern yoga practices. Improve flexibility, strength, balance, and mental clarity.', benefits: ['Improves flexibility', 'Reduces stress & anxiety', 'Mind-body connection', 'Better sleep quality'], schedule: 'Daily – 6:30 AM & 7:00 PM' },
  { emoji: '❤️', title: 'Cardio Training', tag: 'Cardio', desc: 'State-of-the-art cardio equipment combined with guided sessions to keep your heart healthy and energy sky-high.', benefits: ['Advanced equipment', 'Guided cardio plans', 'Heart rate monitoring', 'Fat burning optimization'], schedule: 'Open access – 5:30 AM – 10:00 PM' },
]

const plans = [
  { plan: 'Monthly', price: '₹1,499', per: 'month', features: ['All gym access', 'Cardio & weights', 'Locker access', '1 group class/week'], highlight: false },
  { plan: 'Quarterly', price: '₹3,999', per: 'quarter', features: ['All gym access', 'Unlimited classes', 'Locker access', 'Nutrition consultation', 'Progress tracking'], highlight: true },
  { plan: 'Annual', price: '₹12,999', per: 'year', features: ['All gym access', 'Unlimited classes', 'Personal trainer sessions', 'Free diet plan', 'Progress tracking', 'Exclusive merchandise'], highlight: false },
]

export default function Services() {
  return (
    <div>
      <section className="pt-40 pb-20 bg-page-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%)' }} />
        <div className="container relative">
          <ScrollReveal>
            <span className="section-eyebrow">Our Services</span>
            <h1 className="font-display uppercase leading-[0.95] mb-5 text-5xl md:text-7xl">
              Fitness Services<br />Built for <span className="text-accent">Everyone</span>
            </h1>
            <p className="text-muted text-lg max-w-xl leading-relaxed">
              Our diverse range of classes and services ensures there is something for every fitness level, goal, and lifestyle at Apex Fitness.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="container grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="card flex flex-col gap-5 h-full">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
                    style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {s.emoji}
                  </div>
                  <div>
                    <span className="tag mb-2 inline-block uppercase tracking-widest">{s.tag}</span>
                    <h2 className="text-2xl font-bold">{s.title}</h2>
                  </div>
                </div>
                <p className="text-muted leading-relaxed text-sm">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.benefits.map(b => (
                    <span key={b} className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(0,240,255,0.06)', border: '1px solid rgba(0,240,255,0.12)', color: '#00f0ff' }}>
                      {b}
                    </span>
                  ))}
                </div>
                <div className="px-4 py-3 rounded-xl text-sm text-muted"
                  style={{ background: 'rgba(17,24,39,0.6)', borderLeft: '4px solid #00f0ff' }}>
                  <strong className="block text-gray-100 mb-0.5">Schedule</strong>
                  {s.schedule}
                </div>
                <Link to="/contact" className="btn-outline self-start text-sm px-5 py-2.5">Enquire Now <ArrowRight size={13} /></Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Membership */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #0a0e18 0%, #06080d 100%)' }}>
        <div className="container text-center">
          <ScrollReveal>
            <span className="section-eyebrow">Memberships</span>
            <h2 className="section-title mb-14">Flexible Plans for Every <span className="text-accent">Goal</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5 text-left">
            {plans.map((m, i) => (
              <ScrollReveal key={m.plan} delay={i * 0.1}>
                <div
                  className="card relative overflow-hidden flex flex-col h-full"
                  style={m.highlight ? {
                    background: 'rgba(17,24,39,0.6)',
                    border: '1px solid rgba(0,240,255,0.2)',
                    boxShadow: '0 0 40px rgba(0,240,255,0.08), 0 16px 48px rgba(0,0,0,0.4)',
                  } : {}}>
                  {m.highlight && (
                    <div className="absolute top-4 right-0 text-[10px] font-bold px-3.5 py-1 rounded-l-full tracking-widest uppercase"
                      style={{ background: 'linear-gradient(135deg, #00f0ff, #00b8d4)', color: '#06080d' }}>
                      Best Value
                    </div>
                  )}
                  <p className="text-xs font-bold tracking-[3px] uppercase text-muted mb-2">{m.plan}</p>
                  <div className="flex items-baseline gap-1 mb-7">
                    <span className="font-display text-5xl"
                      style={m.highlight ? { background: 'linear-gradient(135deg, #00f0ff, #7c3aff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : {}}>
                      {m.price}
                    </span>
                    <span className="text-dim text-xs">/{m.per}</span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {m.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm text-muted">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: '#00f0ff', boxShadow: '0 0 6px rgba(0,240,255,0.4)' }} />{f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={m.highlight ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}>Get Started</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
