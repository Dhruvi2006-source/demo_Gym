import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight, ArrowRight, Zap, Users, Target, Clock,
  Star, Play, CheckCircle, TrendingUp
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

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
  { level: 'Beginner', type: 'Fat Loss', color: '#00f0ff' },
  { level: 'Intermediate', type: 'Fat Loss', color: '#00b8d4' },
  { level: 'Beginner', type: 'Muscle Gain', color: '#7c3aff' },
  { level: 'Intermediate', type: 'Muscle Gain', color: '#a855f7' },
  { level: 'Advanced', type: 'Muscle Gain', color: '#3b82f6' },
  { level: 'All Levels', type: 'Weight Loss', color: '#06b6d4' },
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

      <div className="grid md:grid-cols-2 gap-10 card p-8 md:p-12">
        {/* Form */}
        <div>
          {/* Gender */}
          <div className="flex gap-3 mb-6">
            {['male', 'female'].map(g => (
              <button key={g} onClick={() => setGender(g)}
                className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all duration-300 ${gender === g ? 'bg-accent/10 text-accent border-accent/25' : 'bg-bg-3/60 text-muted border-white/[0.08] hover:border-accent/30'}`}>
                {g === 'male' ? '♂ Male' : '♀ Female'}
              </button>
            ))}
          </div>
          {/* Unit */}
          <div className="flex gap-3 mb-6">
            {[['metric', 'Metric (kg/cm)'], ['imperial', 'Imperial (lbs/in)']].map(([u, label]) => (
              <button key={u} onClick={() => setUnit(u)}
                className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all duration-300 ${unit === u ? 'bg-accent/10 text-accent border-accent/25' : 'bg-bg-3/60 text-muted border-white/[0.08] hover:border-accent/30'}`}>
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
                style={{ border: `5px solid ${info.color}`, boxShadow: `0 0 40px ${info.color}30, inset 0 0 20px ${info.color}10` }}>
                <span className="font-display text-5xl leading-none" style={{ color: info.color }}>{bmi}</span>
                <span className="text-sm text-muted font-semibold mt-1">{info.label}</span>
              </div>
              <div className="w-full flex flex-col gap-3">
                {[
                  { label: 'Underweight', range: '< 18.5', color: '#60a5fa' },
                  { label: 'Normal', range: '18.5 – 24.9', color: '#4ade80' },
                  { label: 'Overweight', range: '25 – 29.9', color: '#fb923c' },
                  { label: 'Obese', range: '≥ 30', color: '#f87171' },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-3 text-sm text-muted">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: s.color, boxShadow: `0 0 8px ${s.color}40` }} />
                    <span>{s.label}</span>
                    <span className="ml-auto font-mono text-xs text-dim">{s.range}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 text-dim text-center">
              <TrendingUp size={56} strokeWidth={1} className="opacity-30" />
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
      <section className="relative min-h-screen flex flex-col break-words overflow-wrap">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Dark gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(6,8,13,0.92) 0%, rgba(6,8,13,0.75) 40%, rgba(6,8,13,0.85) 100%)",
          }}
        />
        {/* Accent glow overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(0,240,255,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 bg-grid" />

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-120px)] pt-28 pb-16">
          {/* Left */}
          <div>
            <ScrollReveal>
              <div
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-xs font-semibold tracking-widest uppercase mb-8"
                style={{
                  background: "rgba(0,240,255,0.06)",
                  borderColor: "rgba(0,240,255,0.15)",
                  color: "#00f0ff",
                }}
              >
                <Zap size={13} /> India's Top Fitness Center
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1
                className="font-display uppercase leading-[0.9] mb-7 break-words"
                style={{
                  fontSize: "clamp(48px, 8vw, 110px)",
                  letterSpacing: "0.04em",
                }}
              >
                Strong.
                <br />
                <span className="text-gradient">Fit.</span>
                <br />
                Unstoppable.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-lg leading-relaxed max-w-full mb-10">
                Transform your body and mindset at Apex Fitness - Anand &
                Nadiad's premier gym with expert coaches, modern equipment, and
                proven programs.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-9">
                <Link to="/contact" className="btn-primary text-base px-10 py-4">
                  Start Free Trial <ArrowRight size={18} />
                </Link>
                <Link to="/programs" className="btn-outline">
                  <Play size={15} fill="currentColor" /> See Programs
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-2.5 text-muted text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#00f0ff"
                    color="#00f0ff"
                    style={{ filter: "drop-shadow(0 0 4px rgba(0,240,255,0.4))" }}
                  />
                ))}
                <span>4.9/5 from 500+ reviews</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right visual */}
          <div className="hidden lg:flex relative items-center justify-end min-h-[480px]">
            {/* Floating cards */}
            <div
              className="absolute top-10 right-0 flex items-center gap-3 rounded-2xl px-5 py-4 shadow-card z-10 min-w-[210px]"
              style={{
                background: "rgba(17,24,39,0.7)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Target size={18} className="text-accent" />
              <div>
                <strong className="block text-sm">Members Active Today</strong>
                <span className="text-xs text-muted">280+ working out now</span>
              </div>
            </div>
            {/* Central visual */}
            <div className="relative w-72 h-72 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{ border: "1px solid rgba(0,240,255,0.12)" }}
              />
              <div
                className="absolute inset-6 rounded-full"
                style={{ border: "1px solid rgba(124,58,255,0.2)" }}
              />
              <div
                className="absolute inset-12 rounded-full"
                style={{ border: "1px solid rgba(0,240,255,0.08)" }}
              />
              <div
                className="w-44 h-44 rounded-full flex items-center justify-center z-10 animate-float overflow-hidden"
                style={{
                  background: "rgba(17,24,39,0.6)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(0,240,255,0.15)",
                  boxShadow: "0 8px 40px rgba(0,240,255,0.1)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Gym workout"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className="absolute bottom-10 left-0 flex items-center gap-3 rounded-2xl px-5 py-4 shadow-card z-10 min-w-[210px]"
              style={{
                background: "rgba(17,24,39,0.7)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <CheckCircle size={18} className="text-accent" />
              <div>
                <strong className="block text-sm">Personal Best</strong>
                <span className="text-xs text-muted">
                  Track your progress daily
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <ScrollReveal y={0} duration={1}>
          <div
            className="relative z-10 py-10 border-t border-white/[0.06]"
            style={{
              background: "rgba(10,14,24,0.8)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s, i) => (
                <div key={s.label}>
                  <ScrollReveal delay={0.1 * i} y={10}>
                    <span
                      className="font-display text-4xl block leading-none mb-1.5"
                      style={{
                        background: "linear-gradient(135deg, #00f0ff, #7c3aff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {s.num}
                    </span>
                    <span className="text-muted text-xs uppercase tracking-widest">
                      {s.label}
                    </span>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-24 bg-bg">
        <div className="container">
          <div className="flex items-end justify-between mb-14 gap-4 flex-wrap">
            <div>
              <span className="section-eyebrow">What We Offer</span>
              <h2 className="section-title">
                Unlock Your Best Self with
                <br />
                Our <span className="text-accent">Gym Programs</span>
              </h2>
            </div>
            <Link to="/programs" className="btn-outline">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {programs.map((p) => (
              <div
                key={p.title}
                className="flex items-center gap-6 card p-6 group"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
                  style={{
                    background: "rgba(17,24,39,0.8)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {p.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="tag mb-2 inline-block">{p.tag}</span>
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
                <Link
                  to="/programs"
                  className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-muted flex-shrink-0 transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:text-bg"
                >
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BMI CALCULATOR ── */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg, #0a0e18 0%, #06080d 100%)",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <BMICalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-bg">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-14 gap-4 flex-wrap">
              <div>
                <span className="section-eyebrow">Our Services</span>
                <h2 className="section-title">
                  Unlock Your Fitness Potential
                  <br />
                  with Our <span className="text-accent">Services</span>
                </h2>
              </div>
              <Link to="/services" className="btn-outline">
                View All <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="card text-center py-10 px-6 h-full">
                  <div className="text-5xl mb-5">{s.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM TEASER ── */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg, #0a0e18 0%, #06080d 100%)",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <span className="section-eyebrow">Our Experts</span>
            <h2 className="section-title">
              Meet the Experts Behind
              <br />
              Your <span className="text-accent">Fitness</span>
            </h2>
            <p className="section-subtitle mb-14">
              Our certified coaches bring passion, expertise and personalised
              motivation to every session at Apex Fitness.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Michael Smith", role: "Head Coach", emoji: "🏋️" },
              { name: "Sara Johnson", role: "Yoga Specialist", emoji: "🧘" },
              { name: "John Carter", role: "CrossFit Expert", emoji: "⚡" },
              { name: "Lisa Brown", role: "Nutritionist", emoji: "🥗" },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="card text-center py-10 px-5 h-full">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-5"
                    style={{
                      background: "rgba(17,24,39,0.8)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {t.emoji}
                  </div>
                  <h4 className="font-bold text-base mb-2">{t.name}</h4>
                  <span className="tag">{t.role}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <div className="text-center mt-12">
              <Link to="/team" className="btn-outline">
                Meet Full Team <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FREE GUIDES ── */}
      <section className="py-24 bg-bg">
        <div className="container">
          <ScrollReveal>
            <span className="section-eyebrow">Free Resources</span>
            <h2 className="section-title mb-14">
              Your Free <span className="text-accent">Fitness</span> Level Guides
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((g, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-center gap-4 card px-6 py-5 h-full">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{
                      background: g.color,
                      boxShadow: `0 0 10px ${g.color}50`,
                    }}
                  />
                  <div>
                    <span className="block text-sm font-bold">{g.type}</span>
                    <span className="text-xs text-muted">{g.level}</span>
                  </div>
                  <button className="ml-auto flex items-center gap-2 text-xs font-bold text-accent hover:gap-3 transition-all duration-300">
                    Download <ArrowRight size={13} />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg, #0a0e18 0%, #06080d 100%)",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <span className="section-eyebrow">Reviews</span>
            <h2 className="section-title mb-14">
              What Our <span className="text-accent">Members</span> Say
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="card flex flex-col gap-5 h-full">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="#00f0ff"
                        color="#00f0ff"
                        style={{
                          filter: "drop-shadow(0 0 3px rgba(0,240,255,0.3))",
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-muted text-sm leading-relaxed flex-1 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full font-bold text-base flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #00f0ff, #7c3aff)",
                        color: "#06080d",
                      }}
                    >
                      {t.name[0]}
                    </div>
                    <strong className="text-sm">{t.name}</strong>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG TEASER ── */}
      <section className="py-24 bg-bg">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-14 gap-4 flex-wrap">
              <div>
                <span className="section-eyebrow">Fitness Blogs & News</span>
                <h2 className="section-title">
                  Your Guide to{" "}
                  <span className="text-accent">Fitness Success!</span>
                </h2>
              </div>
              <Link to="/blog" className="btn-outline">
                All Posts <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Gym Diet Guide: What to Eat Before and After Workout",
                desc: "A proper gym diet is essential to maximize your workout performance. Eating the right foods before your workout provides energy for strength, endurance and focus.",
                tag: "Nutrition",
                time: "5 min read",
              },
              {
                title:
                  "Home Workout vs Gym Workout: Which One Is Right for You?",
                desc: "Learn the difference between home workouts and gym workouts, their benefits, limitations, and which option helps you achieve faster and safer fitness results.",
                tag: "Training",
                time: "4 min read",
              },
            ].map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="card flex flex-col gap-4 h-full">
                  <div className="flex items-center justify-between">
                    <span className="tag">{b.tag}</span>
                    <span className="flex items-center gap-1.5 text-xs text-dim">
                      <Clock size={11} />
                      {b.time}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg leading-snug">{b.title}</h3>
                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {b.desc}
                  </p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:gap-3 transition-all duration-300"
                  >
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg, #0a0e18 0%, #06080d 100%)",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <div
              className="relative flex flex-col lg:flex-row items-center justify-between gap-12 rounded-3xl px-10 py-16 overflow-hidden"
              style={{
                background: "rgba(17,24,39,0.5)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(0,240,255,0.12)",
                boxShadow:
                  "0 0 60px rgba(0,240,255,0.06), 0 24px 48px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,240,255,0.08) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute -right-24 top-0 w-64 h-64 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(124,58,255,0.06) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <h2 className="section-title">
                  Transform Your Body.
                  <br />
                  <span className="text-accent">Start Today.</span>
                </h2>
                <p className="section-subtitle">
                  Join thousands who've transformed their lives at Apex Fitness.
                  Your first class is on us.
                </p>
              </div>
              <div className="flex flex-col gap-4 flex-shrink-0 relative z-10">
                <Link to="/contact" className="btn-primary text-base px-10 py-4">
                  Get Free Trial <ArrowRight size={18} />
                </Link>
                <Link to="/programs" className="btn-outline justify-center">
                  Explore Programs
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
