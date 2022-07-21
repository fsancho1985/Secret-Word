import React from 'react'
import './StartScreen.css'

function StartScreen({ startGame }) {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Press the button to start</p>
      <button onClick={startGame}>Start</button>
    </div>
  )
}

export default StartScreen
