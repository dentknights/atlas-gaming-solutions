import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">Questions? We have answers. Reach out and our team will get back to you within 24 hours.</p>

          <div className="contact-grid grid-2">
            <div className="contact-info">
              <div className="card">
                <h3>📞 Customer Support</h3>
                <p>For account issues, gameplay questions, or technical help.</p>
                <a href="mailto:support@atlasgaming.com" className="contact-link">support@atlasgaming.com</a>
              </div>
              <div className="card">
                <h3>💼 Business Inquiries</h3>
                <p>Partnerships, press, and enterprise opportunities.</p>
                <a href="mailto:business@atlasgaming.com" className="contact-link">business@atlasgaming.com</a>
              </div>
              <div className="card">
                <h3>📞 Facebook Messenger</h3>
                <p>Chat with us directly on Messenger for quick responses.</p>
                <span className="contact-link">m.me/atlasgamingsolutions</span>
              </div>
            </div>

            <div className="contact-faq">
              <h2 className="faq-title">Common Questions</h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary>What games and platforms do you have?</summary>
                  <p>We offer Slots, Poker, Blackjack, Roulette, Bingo, and more — available on Web, iOS, Android, and Facebook.</p>
                </details>
                <details className="faq-item">
                  <summary>Is it free to play?</summary>
                  <p>Yes. All our games are 100% free to play. No deposits or purchases are ever required.</p>
                </details>
                <details className="faq-item">
                  <summary>Do you pay real money?</summary>
                  <p>Players can win real rewards through tournaments, leaderboards, and loyalty programs. No gambling or wagering involved.</p>
                </details>
                <details className="faq-item">
                  <summary>How do I sync my progress?</summary>
                  <p>Simply log in with the same account across all platforms. Your progress syncs automatically in real time.</p>
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
