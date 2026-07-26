import './About.css'

function About() {
  const principles = [
    { title: 'No Crystal Balls', desc: 'We do not predict the future. We prepare you for multiple versions of it. Every scenario is grounded in data, not guesswork.' },
    { title: 'Decision-First', desc: 'Every simulation ends with a clear decision. If it does not change what you do Monday morning, we failed.' },
    { title: 'Red Team Rigor', desc: 'We assign dedicated teams to argue against your plan. The best strategies survive hostile scrutiny.' },
    { title: 'Actionable Output', desc: 'Playbooks, not PowerPoints. You leave with documents your team can execute immediately.' },
  ]

  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">About Atlas Wargaming</h1>
          <p className="section-subtitle">We help leadership teams make better decisions under uncertainty.</p>

          <div className="about-story">
            <div className="card story-card">
              <h3>What We Do</h3>
              <p>Atlas Wargaming Solutions runs structured business simulations — adapted from military wargaming — for corporate leadership teams. We model competitive moves, market shocks, and internal crises before they happen, so you have a playbook ready when they do.</p>
              <p>Our clients range from mid-market firms planning expansion to Fortune 500 teams stress-testing quarterly strategy. Every engagement is custom-built around the decisions you face right now.</p>
            </div>
          </div>

          <div className="principles-section">
            <h2 className="section-title">How We Work</h2>
            <div className="grid-2">
              {principles.map((p) => (
                <div key={p.title} className="card principle-card">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
