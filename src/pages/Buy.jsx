import { useState } from 'react'
import './Buy.css'

function Buy() {
  const [copied, setCopied] = useState(false)
  const contractAddress = 'E3kL5eQXfhVuSxRAMx84otbV6nUsXtWnijXKL1jQpump'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="page buy-page">
      <div className="page-content">
        <h1 className="page-title">Join the Shadow Army</h1>
        <p className="page-subtitle">Rise from the darkness. Ascend to greatness. Become one with the shadows.</p>
        
        <div className="buy-steps">
          <div className="step step-main">
            <a href="https://pump.fun/E3kL5eQXfhVuSxRAMx84otbV6nUsXtWnijXKL1jQpump" className="step-link-main" target="_blank" rel="noopener noreferrer">
              <div className="step-number">
                <svg viewBox="0 0 100 100" fill="none" width="40" height="40">
                  <circle cx="50" cy="50" r="45" fill="#00D4FF"/>
                  <path d="M30 50L45 65L70 35" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Buy on Pump.fun</h3>
              <div className="token-info">
                <div className="token-name">Shadow Ascension</div>
                <div className="token-ticker">$RISE</div>
              </div>
              <p>Trade now on Pump.fun</p>
            </a>
            
            <div className="contract-section-inline">
              <div className="contract-label">Contract Address</div>
              <div className="contract-box">
                <code className="contract-address">{contractAddress}</code>
                <button onClick={copyToClipboard} className="copy-button">
                  {copied ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buy
