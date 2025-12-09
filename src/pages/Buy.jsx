import './Buy.css'

function Buy() {
  return (
    <div className="page buy-page">
      <div className="page-content">
        <h1 className="page-title">Join the Shadow Army</h1>
        <p className="page-subtitle">Rise from the darkness. Ascend to greatness. Become one with the shadows.</p>
        
        <div className="buy-steps">
          <a href="https://join.pump.fun/HSag/tn809zzs" className="step step-link" target="_blank" rel="noopener noreferrer">
            <div className="step-number">
              <svg viewBox="0 0 100 100" fill="none" width="40" height="40">
                <circle cx="50" cy="50" r="45" fill="#00D4FF"/>
                <path d="M30 50L45 65L70 35" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Pump.fun</h3>
            <p>Buy Shadow Ascension tokens on Pump.fun</p>
          </a>
          
          <div className="step step-disabled">
            <div className="coming-soon-badge">Coming Soon</div>
            <div className="step-number">
              <svg viewBox="0 0 100 100" fill="none" width="40" height="40">
                <circle cx="50" cy="50" r="45" fill="#4a9eff"/>
                <path d="M35 50h30M50 35v30" stroke="white" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Trade</h3>
            <p>Trade Shadow Ascension tokens</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buy
