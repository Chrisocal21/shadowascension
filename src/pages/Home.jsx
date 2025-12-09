import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="page home-page">
      <div className="content">
        <img 
          src="/assets/coinmarkvtr.png" 
          alt="Shadow Ascension Coin" 
          className="coin-image"
        />
        <h1 className="title">Shadow Ascension</h1>
        <div className="tagline">
          <p>Every ascension begins in the dark.</p>
        </div>
        <Link to="/buy" className="cta-button">Join the Shadow Army</Link>
      </div>
    </div>
  )
}

export default Home
