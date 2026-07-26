import './Scenarios.css'

function Scenarios() {
  const scenarios = [
    {
      name: 'Market Entry Wargame',
      tag: 'Expansion',
      desc: 'Simulate entering a new geographic or vertical market. Test pricing, positioning, competitive response, and resource allocation before committing capital.',
      outcomes: ['Go / No-Go decision matrix', 'Competitive response playbook', 'Capital requirement model'],
      duration: '2–3 days',
      team: '5–8 participants',
    },
    {
      name: 'Crisis Response Simulation',
      tag: 'Resilience',
      desc: 'Pressure-test your organization against supply chain collapse, regulatory shocks, PR crises, or economic downturns. Build response playbooks with assigned owners.',
      outcomes: ['Crisis response playbook', 'Decision-tree flowcharts', 'Communication templates'],
      duration: '1–2 days',
      team: '6–10 participants',
    },
    {
      name: 'Competitive Attack Drill',
      tag: 'Strategy',
      desc: 'Model aggressive moves by key competitors — price wars, product launches, talent raids. Develop pre-positioned countermeasures and contingency plans.',
      outcomes: ['Competitive intel brief', 'Counter-strategy options', 'Early-warning indicators'],
      duration: '2 days',
      team: '4–6 participants',
    },
    {
      name: 'Growth Planning Stress Test',
      tag: 'Scaling',
      desc: 'Evaluate scaling decisions across hiring, product roadmap, and geography. Identify bottlenecks, cash-flow risks, and organizational breaking points before they happen.',
      outcomes: ['Scaling roadmap with gates', 'Resource constraint model', 'Org-structure recommendations'],
      duration: '2–3 days',
      team: '5–9 participants',
    },
    {
      name: 'M&A Integration Wargame',
      tag: 'M&A',
      desc: 'Simulate post-merger integration challenges: culture clash, talent retention, systems consolidation. Reduce integration failure rate through pre-mortem analysis.',
      outcomes: ['Integration risk register', '90-day action plan', 'Retention strategy'],
      duration: '3 days',
      team: '8–12 participants',
    },
    {
      name: 'Regulatory Change Drill',
      tag: 'Compliance',
      desc: 'Anticipate new regulations and model their impact on operations, pricing, and market position. Build compliance roadmaps that double as competitive advantages.',
      outcomes: ['Regulatory impact matrix', 'Compliance timeline', 'Competitive advantage map'],
      duration: '1–2 days',
      team: '4–7 participants',
    },
  ]

  return (
    <div className="scenarios-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Scenario Simulations</h1>
          <p className="section-subtitle">Structured wargames tailored to the decisions keeping your leadership team up at night.</p>

          <div className="scenarios-list">
            {scenarios.map((s) => (
              <div key={s.name} className="scenario-detail-card">
                <div className="scenario-header">
                  <div>
                    <span className="tag">{s.tag}</span>
                    <h3>{s.name}</h3>
                  </div>
                </div>
                <p className="scenario-desc">{s.desc}</p>
                <div className="scenario-meta">
                  <div className="meta-item">
                    <span className="meta-label">Duration</span>
                    <span className="meta-value">{s.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Team Size</span>
                    <span className="meta-value">{s.team}</span>
                  </div>
                </div>
                <div className="scenario-outcomes">
                  <span className="outcomes-label">Deliverables:</span>
                  <ul>
                    {s.outcomes.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Scenarios
