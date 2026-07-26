import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">Ready to stress-test your strategy? Reach out and we will respond within one business day.</p>

          <div className="contact-grid grid-2">
            <div className="contact-info">
              <div className="card">
                <h3>📞 Schedule a Consultation</h3>
                <p>Book a 30-minute discovery call to discuss your current strategic challenges.</p>
                <a href="mailto:consult@atlaswargaming.com" className="contact-link">consult@atlaswargaming.com</a>
              </div>
              <div className="card">
                <h3>💼 Enterprise Inquiries</h3>
                <p>Custom engagements, multi-team programs, and retainer arrangements.</p>
                <a href="mailto:enterprise@atlaswargaming.com" className="contact-link">enterprise@atlaswargaming.com</a>
              </div>
              <div className="card">
                <h3>📞 General Inquiries</h3>
                <p>Questions about methodology, pricing, or partnership opportunities.</p>
                <a href="mailto:hello@atlaswargaming.com" className="contact-link">hello@atlaswargaming.com</a>
              </div>
            </div>

            <div className="contact-faq">
              <h2 className="faq-title">Common Questions</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary>What is business wargaming?</summary>
                  <p>A structured simulation where teams role-play future scenarios — competitive attacks, market shifts, crises — to test strategy and build response playbooks before events occur.</p>
                </details>
                <details className="faq-item">
                  <summary>How long does a typical engagement take?</summary>
                  <p>Most simulations run 1–3 days of active sessions, plus 1–2 weeks of pre-work (data gathering, scenario design) and 1 week of post-work (playbook documentation).</p>
                </details>
                <details className="faq-item">
                  <summary>Who should participate?</summary>
                  <p>Ideally the leadership team directly responsible for the decision being tested. Typical groups are 4–12 participants. We can also run cross-functional sessions.</p>
                </details>
                <details className="faq-item">
                  <summary>Is this like a workshop or a game?</summary>
                  <p>It is rigorous and structured, not playful. We use competitive role-play and scenario injection, but the output is serious: decision matrices, risk registers, and action plans.</p>
                </details>
                <details className="faq-item">
                  <summary>Do you offer remote sessions?</summary>
                  <p>Yes. We run hybrid and fully remote wargames using digital whiteboards, breakout rooms, and real-time polling. In-person is preferred for sensitive strategy discussions.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
