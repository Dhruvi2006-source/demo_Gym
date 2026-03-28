import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const team = [
  {
    name: "Michael Smith",
    role: "Head Coach & CrossFit Specialist",
    emoji: "🏋️",
    exp: "12 years",
    spec: "CrossFit, Strength & Conditioning",
    bio: "Michael is a NSCA-certified strength coach who has trained professional athletes and fitness beginners alike. His high-energy sessions push every member to their peak.",
  },
  {
    name: "Sara Johnson",
    role: "Yoga & Wellness Coach",
    emoji: "🧘",
    exp: "8 years",
    spec: "Yoga, Mindfulness, Flexibility",
    bio: "Sara is a certified 200-hour RYT yoga instructor specializing in both Hatha and Vinyasa styles. Her calming yet challenging sessions have helped hundreds achieve balance.",
  },
  {
    name: "John Carter",
    role: "CrossFit & HIIT Trainer",
    emoji: "⚡",
    exp: "6 years",
    spec: "CrossFit, HIIT, Olympic Lifting",
    bio: "John brings explosive energy to every class. His CrossFit L2 certification and competitive HIIT background make his sessions both thrilling and results-driven.",
  },
  {
    name: "Lisa Brown",
    role: "Nutritionist & Fitness Coach",
    emoji: "🥗",
    exp: "9 years",
    spec: "Sports Nutrition, Fat Loss, Body Recomposition",
    bio: "Lisa combines her registered dietitian credentials with personal training expertise to help you achieve results that last through diet, sleep, and movement.",
  },
  {
    name: "Jason Mamoa",
    role: "Personal Trainer & Bodybuilder",
    emoji: "💪",
    exp: "10 years",
    spec: "Hypertrophy, Powerlifting, Body Sculpting",
    bio: "A former competitive bodybuilder, Jason designs progressive overload programs that maximize muscle growth. He specializes in body sculpting and advanced strength programming.",
  },
  {
    name: "Irina Bella",
    role: "Zumba & Aerobics Instructor",
    emoji: "💃",
    exp: "7 years",
    spec: "Zumba, Aerobics, Dance Fitness",
    bio: "Irina is a licensed Zumba instructor with infectious energy. Her classes are packed because she makes fitness feel like the best party you've ever been to.",
  },
];

export default function Team() {
  return (
    <div>
      <section className="pt-40 pb-20 bg-page-hero relative overflow-hidden max-w-full">
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="container relative">
          <ScrollReveal>
            <span className="section-eyebrow">Our Experts</span>
            <h1 className="font-display uppercase leading-[0.95] mb-7 text-[clamp(40px,5vw+1rem,90px)] pr-10">
              Meet the Coaches
              <br />
              Behind Your <span className="text-accent">Transformation</span>
            </h1>
            <p className="text-muted text-lg max-w-xl leading-relaxed">
              Our certified trainers bring a combined 50+ years of expertise to
              guide your fitness journey with passion and precision at Apex Fitness.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="card flex flex-col gap-4 h-full">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                  style={{
                    background: "rgba(17,24,39,0.8)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {t.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t.name}</h3>
                  <p className="text-xs font-semibold text-accent">{t.role}</p>
                </div>
                <p className="text-muted text-sm leading-relaxed flex-1">
                  {t.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">{t.exp}</span>
                  <span className="tag">{t.spec.split(",")[0].trim()}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(180deg, #0a0e18 0%, #06080d 100%)",
        }}
      >
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">
              Passionate About <span className="text-accent">Fitness?</span>
            </h2>
            <p className="section-subtitle mx-auto mb-10">
              We're always looking for certified fitness professionals to join our
              growing team at Apex Fitness.
            </p>
            <Link to="/contact" className="btn-primary">
              Join Our Team <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
