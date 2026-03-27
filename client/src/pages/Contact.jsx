import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { Icon: MapPin, title: 'Locations', lines: ['Anand, Gujarat, India', 'Nadiad, Gujarat, India'] },
  { Icon: Phone, title: 'Phone', lines: ['+91 98765 43210', '+91 87654 32109'] },
  { Icon: Mail, title: 'Email', lines: ['info@optimumfitness.co.in', 'support@optimumfitness.co.in'] },
  { Icon: Clock, title: 'Hours', lines: ['Mon – Sat: 5:30 AM – 10:00 PM', 'Sunday: 7:00 AM – 8:00 PM'] },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <div>
      <section className="pt-40 pb-20 bg-page-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,255,0,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative">
          <span className="section-eyebrow">Get In Touch</span>
          <h1 className="font-display font-black uppercase leading-none mb-4 text-5xl md:text-7xl">
            Start Your Fitness<br /><span className="text-accent">Journey Today</span>
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            Visit us in Anand or Nadiad, book a free trial class, or enquire about membership plans.
          </p>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="container grid lg:grid-cols-[1fr_1.6fr] gap-14 items-start">
          {/* Info */}
          <div>
            <h2 className="section-title text-3xl mb-8">Find <span className="text-accent">Us</span></h2>
            <div className="flex flex-col gap-4 mb-8">
              {contactInfo.map(({ Icon, title, lines }) => (
                <div key={title} className="card flex items-start gap-4 p-5">
                  <div className="w-11 h-11 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1">{title}</p>
                    {lines.map(l => <p key={l} className="text-muted text-sm leading-relaxed">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
            {/* Map placeholder */}
            <div className="rounded-xl border border-white/[0.08] h-44 bg-surface flex flex-col items-center justify-center gap-3 text-muted">
              <MapPin size={28} className="text-accent" />
              <p className="text-sm">Anand & Nadiad, Gujarat</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                className="btn-outline text-xs px-4 py-2">Open in Maps</a>
            </div>
          </div>

          {/* Form */}
          <div className="card p-10">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-black mb-3">Message Sent!</h3>
                <p className="text-muted text-sm max-w-xs mx-auto leading-relaxed">
                  Thank you! Our team will be in touch within 24 hours to schedule your free trial.
                </p>
                <button onClick={() => setSent(false)} className="btn-outline mt-7 mx-auto">Send Another</button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-black mb-2">Book a <span className="text-accent">Free Trial</span></h2>
                <p className="text-muted text-sm mb-8">Fill in your details and our team will contact you within 24 hours.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-0">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" placeholder="John Doe" required value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" placeholder="you@email.com" required value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="interest">I'm Interested In</label>
                      <select id="interest" name="interest" value={form.interest} onChange={handleChange}>
                        <option value="">Select a program</option>
                        <option>CrossFit Training</option>
                        <option>Personal Training</option>
                        <option>Group Fitness</option>
                        <option>Zumba Classes</option>
                        <option>Yoga & Wellness</option>
                        <option>Aerobics</option>
                        <option>Membership Info</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={4} placeholder="Tell us about your fitness goals..." value={form.message} onChange={handleChange} className="resize-y" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-4 mt-2 text-base">
                    Send Message <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
