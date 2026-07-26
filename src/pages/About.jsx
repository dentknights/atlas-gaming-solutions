import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">About Atlas Gaming</h1>
          <p className="section-subtitle">We're building the future of free-to-play social casino gaming.</p>

          <div className="about-grid grid-2">
            <div className="card">
              <h3>Our Mission</h3>
              <p>To deliver premium casino-style entertainment that's accessible to everyone. No paywalls, no gimmicks — just great games and real rewards.</p>
            </div>
            <div className="card">
              <h3>Our Story</h3>
              <p>Founded with a simple idea: players deserve better. We set out to build games that look and feel like the real thing, without the real risk.</p>
            </div>
            <div className="card">
              <h3>What Makes Us Different</h3>
              <p>All games are 100% free to play. We never ask for a deposit. Real rewards come from skill, tournaments, and loyalty — not your wallet.</p>
            </div>
            <div className="card">
              <h3>Responsible Gaming</h3>
              <p>We promote healthy play habits. Our platform includes tools for time tracking, self-limits, and support resources for anyone who needs them.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
