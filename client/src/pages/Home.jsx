import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight, ArrowRight, Zap, Users, Target, Clock,
  Star, Play, CheckCircle, TrendingUp
} from 'lucide-react'

/* ── DATA ───────────────────────────────────────────── */
const programs = [
  { icon: '🏋️', title: 'CrossFit', tag: 'Strength', desc: 'High-intensity workouts combining strength training and cardio — designed for all fitness levels to boost endurance.' },
  { icon: '👥', title: 'Group Fitness', tag: 'Fitness', desc: 'A variety of classes led by expert instructors. A fun, social way to stay motivated and reach your goals together.' },
  { icon: '🎯', title: 'Personal Training', tag: 'Coaching', desc: 'One-on-one sessions with certified trainers. Tailored workouts to achieve your specific fitness goals effectively.' },
  { icon: '🤸', title: 'Flex & Move', tag: 'Mobility', desc: 'Enhance your flexibility and mobility with targeted exercises and stretches. Ideal for all fitness levels.' },
]

const services = [
  { icon: '💃', title: 'Zumba', desc: 'Dance your way to fitness in our high-energy Zumba classes, combining Latin rhythms with fitness moves.' },
  { icon: '🏃', title: 'Aerobics', desc: 'Improve cardiovascular health with our dynamic aerobic sessions designed to burn calories and boost stamina.' },
  { icon: '🧘', title: 'Yoga', desc: 'Rejuvenate body and mind through yoga — improve flexibility, strength, and mental clarity.' },
  { icon: '❤️', title: 'Cardio', desc: 'State-of-the-art cardio equipment and guided sessions to keep your heart healthy and your energy high.' },
]

const stats = [
  { num: '5000+', label: 'Happy Members' },
  { num: '50+', label: 'Expert Trainers' },
  { num: '30+', label: 'Fitness Classes' },
  { num: '10+', label: 'Years of Excellence' },
]

const testimonials = [
  { name: 'Akshay Soni', rating: 5, text: 'Best gym I have ever been to! The trainers are highly professional and supportive. Truly life-changing experience.' },
  { name: 'Darshna Patel', rating: 5, text: 'Love the Zumba and yoga classes here. The energy is incredible and the facilities are top-notch.' },
  { name: 'Shreya Patel', rating: 5, text: 'Optimum Fitness helped me lose 20kg in 8 months. The personal trainers are amazing and very motivating.' },
]

const guides = [
  { level: 'Beginner', type: 'Fat Loss', color: '#d4ff00' },
  { level: 'Intermediate', type: 'Fat Loss', color: '#a8cc00' },
  { level: 'Beginner', type: 'Muscle Gain', color: '#00e5ff' },
  { level: 'Intermediate', type: 'Muscle Gain', color: '#0099b3' },
  { level: 'Advanced', type: 'Muscle Gain', color: '#7c3aed' },
  { level: 'All Levels', type: 'Weight Loss', color: '#ff6b35' },
]

/* ── BMI CALCULATOR ─────────────────────────────────── */
function BMICalculator() {
  const [gender, setGender] = useState('male')
  const [unit, setUnit] = useState('metric')
  const [height, setHeight] = useState(170)
  const [weight, setWeight] = useState(70)
  const [bmi, setBmi] = useState(null)

  const calcBMI = () => {
    const h = unit === 'metric' ? height / 100 : height * 0.0254
    const w = unit === 'metric' ? weight : weight * 0.453592
    setBmi((w / (h * h)).toFixed(1))
  }

  const getBMIInfo = (b) => {
    if (b < 18.5) return { label: 'Underweight', color: '#60a5fa' }
    if (b < 25)   return { label: 'Normal', color: '#4ade80' }
    if (b < 30)   return { label: 'Overweight', color: '#fb923c' }
    return { label: 'Obese', color: '#f87171' }
  }

  const info = bmi ? getBMIInfo(parseFloat(bmi)) : null
  const hLabel = unit === 'metric' ? 'cm' : 'in'
  const wLabel = unit === 'metric' ? 'kg' : 'lbs'

  return (
    <div>
      <span className="section-eyebrow">Free Tool</span>
      <h2 className="section-title">BMI <span className="text-accent">Calculator</span></h2>
      <p className="section-subtitle mb-12">Calculate your Body Mass Index and discover your ideal fitness plan.</p>

      <div className="grid md:grid-cols-2 gap-10 bg-surface border border-white/[0.08] rounded-2xl p-8 md:p-12">
        {/* Form */}
        <div>
          {/* Gender */}
          <div className="flex gap-2 mb-6">
            {['male', 'female'].map(g => (
              <button key={g} onClick={() => setGender(g)}
                className={`flex-1 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${gender === g ? 'bg-accent/10 text-accent border-accent/30' : 'bg-bg-3 text-muted border-white/[0.08] hover:border-accent'}`}>
                {g === 'male' ? '♂ Male' : '♀ Female'}
              </button>
            ))}
          </div>
          {/* Unit */}
          <div className="flex gap-2 mb-6">
            {[['metric', 'Metric (kg/cm)'], ['imperial', 'Imperial (lbs/in)']].map(([u, label]) => (
              <button key={u} onClick={() => setUnit(u)}
                className={`flex-1 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${unit === u ? 'bg-accent/10 text-accent border-accent/30' : 'bg-bg-3 text-muted border-white/[0.08] hover:border-accent'}`}>
                {label}
              </button>
            ))}
          </div>
          {/* Height */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <label className="mb-0 text-sm text-muted font-semibold">Height</label>
              <span className="text-accent font-bold">{height} {hLabel}</span>
            </div>
            <input type="range" min={unit === 'metric' ? 100 : 40} max={unit === 'metric' ? 230 : 90} value={height} onChange={e => setHeight(+e.target.value)} />
          </div>
          {/* Weight */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <label className="mb-0 text-sm text-muted font-semibold">Weight</label>
              <span className="text-accent font-bold">{weight} {wLabel}</span>
            </div>
            <input type="range" min={unit === 'metric' ? 30 : 66} max={unit === 'metric' ? 200 : 440} value={weight} onChange={e => setWeight(+e.target.value)} />
          </div>
          <button onClick={calcBMI} className="btn-primary w-full justify-center py-4">
            Calculate BMI <ChevronRight size={16} />
          </button>
        </div>

        {/* Result */}
        <div className="flex flex-col items-center justify-center gap-8 min-h-[260px]">
          {bmi && info ? (
            <>
              <div className="w-40 h-40 rounded-full flex flex-col items-center justify-center"
                style={{ border: `6px solid ${info.color}`, boxShadow: `0 0 30px ${info.color}40` }}>
                <span className="font-display font-black text-5xl leading-none" style={{ color: info.color }}>{bmi}</span>
                <span className="text-sm text-muted font-semibold">{info.label}</span>
              </div>
              <div className="w-full flex flex-col gap-2.5">
                {[
                  { label: 'Underweight', range: '< 18.5', color: '#60a5fa' },
                  { label: 'Normal', range: '18.5 – 24.9', color: '#4ade80' },
                  { label: 'Overweight', range: '25 – 29.9', color: '#fb923c' },
                  { label: 'Obese', range: '≥ 30', color: '#f87171' },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-2.5 text-sm text-muted">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    <span>{s.label}</span>
                    <span className="ml-auto font-mono text-xs text-dim">{s.range}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 text-dim text-center">
              <TrendingUp size={56} strokeWidth={1} className="opacity-40" />
              <p className="text-sm">Set your info and click Calculate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── HOME PAGE ──────────────────────────────────────── */
export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-hero-grad" />
        <div className="absolute inset-0 bg-dots" />

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-120px)] pt-28 pb-16">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold tracking-widest uppercase mb-7">
              <Zap size={13} /> India's Top Fitness Center
            </div>
            <h1 className="font-display font-black uppercase leading-none mb-6" style={{ fontSize: 'clamp(52px,7vw,96px)', letterSpacing: '-0.03em' }}>
              Strong.<br />
              <span className="text-accent">Fit.</span><br />
              Unstoppable.
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-md mb-10">
              Transform your body and mindset at Optimum Fitness — Anand & Nadiad's premier gym with expert coaches, modern equipment, and proven programs.
            </p>
            <div className="flex flex-wrap gap-4 mb-9">
              <Link to="/contact" className="btn-primary text-base px-9 py-4">
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <Link to="/programs" className="btn-outline">
                <Play size={15} fill="currentColor" /> See Programs
              </Link>
            </div>
            <div className="flex items-center gap-2 text-muted text-sm">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#d4ff00" color="#d4ff00" />)}
              <span>4.9/5 from 500+ reviews</span>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:flex relative items-center justify-center min-h-[480px]">
            {/* Floating cards */}
            <div className="absolute top-10 right-0 flex items-center gap-3 bg-surface/90 backdrop-blur-xl border border-white/[0.08] rounded-xl px-5 py-3.5 shadow-lg z-10 min-w-[200px]">
              <Target size={18} className="text-accent" />
              <div>
                <strong className="block text-sm">Members Active Today</strong>
                <span className="text-xs text-muted">280+ working out now</span>
              </div>
            </div>
            {/* Central visual */}
            <div className="relative w-72 h-72 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-accent/15 animate-pulse-glow" />
              <div className="absolute inset-8 rounded-full border border-accent/25" />
              <div className="w-44 h-44 rounded-full bg-surface border border-accent/20 flex items-center justify-center z-10 animate-float">
                <span className="text-7xl">💪</span>
              </div>
            </div>
            <div className="absolute bottom-10 left-0 flex items-center gap-3 bg-surface/90 backdrop-blur-xl border border-white/[0.08] rounded-xl px-5 py-3.5 shadow-lg z-10 min-w-[200px]">
              <CheckCircle size={18} className="text-accent" />
              <div>
                <strong className="block text-sm">Personal Best</strong>
                <span className="text-xs text-muted">Track your progress daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 bg-surface border-t border-white/[0.08] py-8">
          <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(s => (
              <div key={s.label}>
                <span className="font-display font-black text-4xl text-accent block leading-none mb-1">{s.num}</span>
                <span className="text-muted text-xs uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-24 bg-bg">
        <div className="container">
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <div>
              <span className="section-eyebrow">What We Offer</span>
              <h2 className="section-title">Unlock Your Best Self with<br />Our <span className="text-accent">Gym Programs</span></h2>
            </div>
            <Link to="/programs" className="btn-outline">View All <ArrowRight size={16} /></Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {programs.map(p => (
              <div key={p.title} className="flex items-center gap-6 bg-surface border border-white/[0.08] rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 group">
                <div className="w-16 h-16 rounded-xl bg-bg-3 flex items-center justify-center text-4xl flex-shrink-0">{p.icon}</div>
                <div className="flex-1 min-w-0">
                  <span className="tag mb-2 inline-block">{p.tag}</span>
                  <h3 className="font-bold text-lg mb-1.5">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
                <Link to="/programs" className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-muted flex-shrink-0 transition-all duration-200 group-hover:bg-accent group-hover:border-accent group-hover:text-black">
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BMI CALCULATOR ── */}
      <section className="py-24 bg-bg-2">
        <div className="container">
          <BMICalculator />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-bg">
        <div className="container">
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <div>
              <span className="section-eyebrow">Our Services</span>
              <h2 className="section-title">Unlock Your Fitness Potential<br />with Our <span className="text-accent">Services</span></h2>
            </div>
            <Link to="/services" className="btn-outline">View All <ArrowRight size={16} /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(s => (
              <div key={s.title} className="card text-center py-10 px-6">
                <div className="text-5xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM TEASER ── */}
      <section className="py-24 bg-bg-2">
        <div className="container">
          <span className="section-eyebrow">Our Experts</span>
          <h2 className="section-title">Meet the Experts Behind<br />Your <span className="text-accent">Fitness</span></h2>
          <p className="section-subtitle mb-12">Our certified coaches bring passion, expertise and personalised motivation to every session.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Michael Smith', role: 'Head Coach', emoji: '🏋️' },
              { name: 'Sara Johnson', role: 'Yoga Specialist', emoji: '🧘' },
              { name: 'John Carter', role: 'CrossFit Expert', emoji: '⚡' },
              { name: 'Lisa Brown', role: 'Nutritionist', emoji: '🥗' },
            ].map(t => (
              <div key={t.name} className="card text-center py-9 px-5">
                <div className="w-20 h-20 rounded-full bg-bg-3 flex items-center justify-center text-4xl mx-auto mb-4">{t.emoji}</div>
                <h4 className="font-bold text-base mb-2">{t.name}</h4>
                <span className="tag">{t.role}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/team" className="btn-outline">Meet Full Team <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ── FREE GUIDES ── */}
      <section className="py-24 bg-bg">
        <div className="container">
          <span className="section-eyebrow">Free Resources</span>
          <h2 className="section-title mb-12">Your Free <span className="text-accent">Fitness</span> Level Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((g, i) => (
              <div key={i} className="flex items-center gap-4 bg-surface border border-white/[0.08] rounded-xl px-5 py-4 transition-all duration-200 hover:border-accent/30">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: g.color }} />
                <div>
                  <span className="block text-sm font-bold">{g.type}</span>
                  <span className="text-xs text-muted">{g.level}</span>
                </div>
                <button className="ml-auto flex items-center gap-1.5 text-xs font-bold text-accent hover:gap-3 transition-all duration-200">
                  Download <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-bg-2">
        <div className="container">
          <span className="section-eyebrow">Reviews</span>
          <h2 className="section-title mb-12">What Our <span className="text-accent">Members</span> Say</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(t => (
              <div key={t.name} className="card flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={13} fill="#d4ff00" color="#d4ff00" />)}
                </div>
                <p className="text-muted text-sm leading-relaxed flex-1 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent text-black font-black text-base flex items-center justify-center">{t.name[0]}</div>
                  <strong className="text-sm">{t.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG TEASER ── */}
      <section className="py-24 bg-bg">
        <div className="container">
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <div>
              <span className="section-eyebrow">Fitness Blogs & News</span>
              <h2 className="section-title">Your Guide to <span className="text-accent">Fitness Success!</span></h2>
            </div>
            <Link to="/blog" className="btn-outline">All Posts <ArrowRight size={16} /></Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Gym Diet Guide: What to Eat Before and After Workout', desc: 'A proper gym diet is essential to maximize your workout performance. Eating the right foods before your workout provides energy for strength, endurance and focus.', tag: 'Nutrition', time: '5 min read' },
              { title: 'Home Workout vs Gym Workout: Which One Is Right for You?', desc: 'Learn the difference between home workouts and gym workouts, their benefits, limitations, and which option helps you achieve faster and safer fitness results.', tag: 'Training', time: '4 min read' },
            ].map(b => (
              <div key={b.title} className="card flex flex-col gap-3.5">
                <div className="flex items-center justify-between">
                  <span className="tag">{b.tag}</span>
                  <span className="flex items-center gap-1 text-xs text-dim"><Clock size={11} />{b.time}</span>
                </div>
                <h3 className="font-bold text-lg leading-snug">{b.title}</h3>
                <p className="text-muted text-sm leading-relaxed flex-1">{b.desc}</p>
                <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:gap-3 transition-all duration-200">
                  Read More <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 bg-bg-2">
        <div className="container">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 bg-surface border border-accent/15 rounded-3xl px-10 py-16 overflow-hidden">
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 bg-[radial-gradient(circle,rgba(212,255,0,0.1)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="section-title">Transform Your Body.<br /><span className="text-accent">Start Today.</span></h2>
              <p className="section-subtitle">Join thousands who've transformed their lives. Your first class is on us.</p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0 relative z-10">
              <Link to="/contact" className="btn-primary text-base px-10 py-4">
                Get Free Trial <ArrowRight size={18} />
              </Link>
              <Link to="/programs" className="btn-outline justify-center">Explore Programs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
