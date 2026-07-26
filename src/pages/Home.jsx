import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const scenarios = [
    { name: 'Market Entry', icon: '🎯', desc: 'Test expansion into new markets before committing capital.' },
    { name: 'Crisis Response', icon: '⚡', desc: 'Simulate supply chain failures, PR disasters, and economic shocks.' },
    { name: 'Competitive Attack', icon: '♟️', desc: 'Model competitor moves and build counter-strategies in advance.' },
    { name: 'Growth Planning', icon: '📈', desc: 'Pressure-test scaling decisions across hiring, product, and geography.' },
  ]

  const process = [
    { step: '01', title: 'Define', desc: 'We map your business model, key variables, and decision points.' },
    { step: '02', title: 'Simulate', desc: 'We run structured wargames against multiple future scenarios.' },
    { step: '03', title: 'Decide', desc: 'You get clear action plans ranked by risk, cost, and upside.' },
  ]

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-content">
          <span className="hero-tag">Business Wargaming Consultancy</span>
          <h1>See the Future.<br />Act Before It Happens.</h1>
          <p className="hero-subtitle">
            Atlas Wargaming Solutions runs structured scenario simulations for leadership teams. We stress-test your strategy against real-world shocks — so you know exactly what to do when they hit.
          </p>
          <div className="hero-buttons">
            <Link to="/scenarios" className="btn btn-primary">Explore Scenarios</Link>
            <Link to="/contact" className="btn btn-outline">Book a Session</Link>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="section scenarios">
        <div className="container">
          <h2 className="section-title">Scenario Types</h2>
          <p className="section-subtitle">Every business faces uncertainty. We model the ones that matter most.</p>
          <div className="grid-4">
            {scenarios.map((s) => (
              <div key={s.name} className="scenario-card">
                <div className="scenario-icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Three phases. Zero fluff. Maximum clarity.</p>
          <div className="process-grid">
            {process.map((p) => (
              <div key={p.step} className="process-card">
                <span className="process-step">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container cta-box">
          <h2>Ready to Stress-Test Your Strategy?</h2>
          <p>Leadership teams that wargame make better decisions under pressure. Let's build your playbook.</p>
          <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
