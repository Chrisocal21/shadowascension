import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <img 
            src="/assets/coinmarkvtr.png" 
            alt="Shadow Ascension" 
            className="hero-coin"
          />
          <h1 className="hero-title">Shadow Ascension</h1>
          <div className="hero-ticker">$RISE</div>
          <p className="hero-tagline">Every ascension begins in the dark.</p>
          <a href="/buy" className="cta-button">Buy on Pump.fun</a>
        </div>
      </section>

      <section className="info-section">
        <div className="info-container">
          <div className="info-card">
            <h3>A Meme Coin That Means Something</h3>
            <p>Not just another token. We're building a community that grows organically, a brand that feels iconic, and a world where early believers become part of something bigger.</p>
            <p>Stories, comic books, limited edition collectibles—every piece adds to the lore and brings the community together as one. This is more than a coin. It's a movement.</p>
          </div>
          
          <div className="quick-links">
            <a href="/about" className="quick-link">
              <div className="link-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <span className="link-text">Learn More</span>
            </a>
            <a href="/community" className="quick-link">
              <div className="link-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <span className="link-text">Join the Community</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
