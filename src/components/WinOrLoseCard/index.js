import './index.css'

const WinOrLoseCard = props => {
  const {currScore, resetGame} = props
  const resultImg =
    currScore === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const resultText = currScore === 12 ? 'You Won' : 'You Lose'

  return (
    <div className="result-card">
      <div className="img-card">
        <img className="result-img" src={resultImg} alt="win or lose" />
      </div>
      <div className="result-stats">
        <h1 className="result-text">{resultText}</h1>
        <div className="score-box">
          <p className="score-text">{currScore === 12 && 'Best'} Score</p>
          <p className="score">{currScore}/12</p>
        </div>
        <button className="reset-btn" onClick={resetGame} type="button">
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
