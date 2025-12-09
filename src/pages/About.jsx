import './About.css'

function About() {
  return (
    <div className="page about-page">
      <div className="page-content">
        <h1 className="page-title">About Shadow Ascension</h1>
        <p className="page-subtitle">Rise from the shadows into the light</p>
        
        <div className="about-content">
          <section className="about-section">
            <h2>What We're Building</h2>
            <p>
              We're creating a meme coin that actually means something. Not in a corporate way, but in a real way—a community that grows organically, a brand that feels iconic, and a world where early believers become part of something bigger.
            </p>
            <p>
              This isn't about copying every other token. It's about building a vibe and a story people genuinely want to be part of.
            </p>
          </section>
          
          <section className="about-section">
            <h2>The Creators</h2>
            <p>
              Our team is hard at work expanding the Shadow Ascension universe. We're developing merch, comics, stories, and other content to bring depth to the coin and its characters.
            </p>
            <p>
              This is more than just a token—it's a growing narrative. Every piece of art, every story, every design adds to the lore. And you? You're part of it.
            </p>
          </section>
          
          <section className="about-section">
            <h2>Community Matters</h2>
            <p>
              Every great movement needs people who believe in it. That's where you come in.
            </p>
            <p>
              We believe in transparent communication, holder-first decisions, and zero gatekeeping. Whether you're an artist, a dev, a trader, or just getting started—you matter here.
            </p>
            <p className="vision-statement">
              <strong>Show up, and you're one of us. Build, and you rise faster. Believe, and you become part of the lore forever.</strong>
            </p>
          </section>
          
          <section className="about-section">
            <h2>Built on Trust</h2>
            <p>
              Shadow Ascension isn't a sketchy crypto project. We're building with stability and transparency:
            </p>
            <ul className="vision-list">
              <li>Liquidity locked</li>
              <li>Anti-rug design</li>
              <li>No hidden functions</li>
              <li>Clear roadmap with realistic goals</li>
            </ul>
            <p>
              Fun, mysterious, and hype—without the usual crypto nonsense.
            </p>
          </section>
          
          <section className="about-section">
            <h2>Join the Ascension</h2>
            <p>
              If the artwork speaks to you, if the vibe resonates, if you've been waiting for something different—this is it.
            </p>
            <p className="vision-statement">
              <strong>Welcome to the shadows. Rise wisely. Rise together. Rise Ascended.</strong>
            </p>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a href="/buy" className="ascension-button">Join the Shadow Army</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
