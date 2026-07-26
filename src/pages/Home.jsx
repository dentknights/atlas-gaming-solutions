import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const platforms = [
    { name: 'Web Browser', icon: '🌐', desc: 'Play instantly on any device' },
    { name: 'iOS', icon: '📱', desc: 'Native iPhone & iPad app' },
    { name: 'Android', icon: '🤖', desc: 'Google Play Store' },
    { name: 'Facebook', icon: '👥', desc: 'Play on Facebook Gaming' },
  ]

  const features = [
    { title: 'Free to Play', desc: 'All games are completely free. No purchase required to enjoy the full experience.' },
    { title: 'Real Rewards', desc: 'Compete in tournaments and leaderboards for real cash prizes and bonuses.' },
    { title: 'Cross-Platform', desc: 'Seamless progress sync across mobile, desktop, and social platforms.' },
    { title: '24/7 Support', desc: 'Our dedicated team is always here to help with any questions or issues.' },
  ]

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-content">
          <h1>Premium Gaming.<br />Real Rewards.</h1>
          <p className="hero-subtitle">
            Atlas Gaming Solutions delivers world-class casino-style entertainment across every platform. Play free, compete, and win real.
          </p>
          <div className="hero-buttons">
            <Link to="/games" className="btn btn-primary">Explore Games</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section platforms">
        <div className="container">
          <h2 className="section-title">Play Anywhere</h2>
          <p className="section-subtitle">Available on all major platforms. Pick up where you left off, anytime.</p>
          <div className="grid-4">
            {platforms.map((p) => (
              <div key={p.name} className="platform-card">
                <div className="platform-icon">{p.icon}</div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Why Players Choose Atlas</h2>
          <p className="section-subtitle">Built for gamers who expect the best.</p>
          <div className="grid-2">
            {features.map((f) => (
              <div key={f.title} className="card feature-card">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container cta-box">
          <h2>Ready to Play?</h2>
          <p>Join thousands of players already winning on Atlas Gaming.</p>
          <Link to="/games" className="btn btn-primary">Browse Games</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
