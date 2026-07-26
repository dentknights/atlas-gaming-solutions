import './Games.css'

function Games() {
  const games = [
    { name: 'Apex Slots', category: 'Slots', players: '12.4K', status: 'Live' },
    { name: 'Royal Poker', category: 'Card', players: '8.2K', status: 'Live' },
    { name: 'Blackjack Pro', category: 'Table', players: '6.7K', status: 'Live' },
    { name: 'Lucky Wheel', category: 'Casual', players: '15.1K', status: 'Live' },
    { name: 'Roulette Elite', category: 'Table', players: '5.3K', status: 'Live' },
    { name: 'Bingo Blast', category: 'Casual', players: '9.8K', status: 'Live' },
  ]

  return (
    <div className="games-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Our Games</h1>
          <p className="section-subtitle">Free-to-play casino-style games with real rewards. All titles are available across web, iOS, Android, and Facebook.</p>

          <div className="games-grid">
            {games.map((game) => (
              <div key={game.name} className="game-card">
                <div className="game-thumb">
                  <div className="game-thumb-placeholder">{game.name[0]}</div>
                  <span className="game-status">{game.status}</span>
                </div>
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <div className="game-meta">
                    <span className="game-category">{game.category}</span>
                    <span className="game-players">👥 {game.players} playing</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Games
