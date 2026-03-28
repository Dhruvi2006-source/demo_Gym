import { Clock } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const posts = [
  {
    tag: 'Nutrition', time: '5 min read', emoji: '🥗',
    title: 'Gym Diet Guide: What to Eat Before and After Workout',
    excerpt: 'A proper gym diet is essential to maximize your workout performance. Eating the right foods before your workout provides the energy you need for strength, endurance, and focus.',
    content: [
      '✅ Pre-Workout: Eat 1–2 hours before. Include complex carbs (oats, banana, brown rice) and lean protein (eggs, chicken, Greek yogurt) for sustained energy.',
      '🔥 During Workout: Stay hydrated. A small amount of fast-acting carbs can help during very long sessions.',
      '💪 Post-Workout: Within 30–60 minutes, consume protein + carbs. Whey shake with banana, or grilled chicken with sweet potato works great.',
      '🚫 Avoid: Heavy fatty or fried foods before training — they slow digestion and cause sluggishness.',
    ],
  },
  {
    tag: 'Training', time: '4 min read', emoji: '🏠',
    title: 'Home Workout vs Gym Workout: Which One Is Right for You?',
    excerpt: 'Learn the key differences between home workouts and gym workouts, their benefits, limitations, and which option helps you achieve faster and safer fitness results.',
    content: [
      '🏠 Home Workouts: Convenient, no commute, low cost. But limited equipment can create plateaus. Great for beginners and maintenance.',
      '🏋️ Gym Workouts: Access to professional equipment, variety, and expert coaching. Ideal for muscle building and sport-specific training.',
      '📊 Results: Studies show gym training typically leads to faster strength gains because of progressive overload with heavier weights.',
      '🎯 Verdict: For beginners, either works. For serious transformation, gym training with a professional coach wins every time.',
    ],
  },
  {
    tag: 'Lifestyle', time: '3 min read', emoji: '😴',
    title: 'Why Sleep is Your Most Powerful Recovery Tool',
    excerpt: 'Many gym-goers focus solely on workouts and nutrition, completely ignoring the most powerful recovery tool available — quality sleep. Here is why 7–9 hours can transform your results.',
    content: [
      '🔬 Science: During deep sleep, your body releases growth hormone and repairs micro-tears in muscle tissue from workouts.',
      '📉 Sleep Deprivation: Even one bad night increases cortisol (stress hormone), kills performance, and increases injury risk.',
      '🌙 Optimize: Maintain a consistent schedule, keep the room cool and dark, avoid screens 1 hour before bed.',
      '⏰ The 7–9 Rule: Aim for 7–9 hours every night. Athletes in serious training phases may need 9–10 hours to fully recover.',
    ],
  },
]

export default function Blog() {
  return (
    <div>
      <section className="pt-40 pb-20 bg-page-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%)' }} />
        <div className="container relative">
          <ScrollReveal>
            <span className="section-eyebrow">Fitness Blog</span>
            <h1 className="font-display uppercase leading-[0.95] mb-5 text-5xl md:text-7xl">
              Insights for Your<br /><span className="text-accent">Fitness Journey</span>
            </h1>
            <p className="text-muted text-lg max-w-xl leading-relaxed">
              Expert tips, training guides, and nutrition advice from our certified coaches at Apex Fitness.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="container flex flex-col gap-8">
          {posts.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <article className="card flex flex-col gap-5 h-full">
                <div className="flex items-center gap-4">
                  <span className="text-5xl leading-none">{p.emoji}</span>
                  <div className="flex items-center gap-3">
                    <span className="tag uppercase tracking-widest">{p.tag}</span>
                    <span className="flex items-center gap-1.5 text-xs text-dim"><Clock size={11} />{p.time}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold leading-snug">{p.title}</h2>
                <p className="text-muted leading-relaxed">{p.excerpt}</p>
                <ul className="flex flex-col gap-3 p-6 rounded-xl"
                  style={{ background: 'rgba(17,24,39,0.6)', borderLeft: '4px solid #00f0ff' }}>
                  {p.content.map((c, i) => (
                    <li key={i} className="text-sm text-muted leading-relaxed">{c}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 text-center" style={{ background: 'linear-gradient(180deg, #0a0e18 0%, #06080d 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Stay <span className="text-accent">Informed</span></h2>
            <p className="section-subtitle mx-auto mb-10">Get weekly fitness tips, workout guides, and nutrition advice delivered to your inbox from Apex Fitness.</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 rounded-full border-white/[0.08]" />
              <button className="btn-primary">Subscribe</button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
