import './index.css'

const NavBar = props => {
  const {currScore, topScore, isGameFinished} = props

  return (
    <section className="navbar">
      <div className="logo-box">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="app-name">Emoji Game</h1>
      </div>
      {!isGameFinished && (
        <div className="nav-score-box">
          <p>Score: {currScore}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </section>
  )
}

export default NavBar
