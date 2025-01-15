import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    currScore: 0,
    topScore: 0,
    isGameFinished: false,
    clickedEmojiIdsList: [],
  }

  selectEmoji = selectedId => {
    this.setState(prevState => {
      const {clickedEmojiIdsList, currScore, topScore} = prevState

      // Check if the emoji has already been clicked (Game Lost)
      if (clickedEmojiIdsList.includes(selectedId)) {
        const newTopScore = currScore > topScore ? currScore : topScore

        return {
          isGameFinished: true,
          topScore: newTopScore,
        }
      }

      const newClickedEmojiIdsList = [...clickedEmojiIdsList, selectedId]
      const newCurrScore = currScore + 1

      // If all emojis have been clicked (Game Won)
      if (newClickedEmojiIdsList.length === 12) {
        const newTopScore = newCurrScore > topScore ? newCurrScore : topScore

        return {
          clickedEmojiIdsList: newClickedEmojiIdsList,
          isGameFinished: true,
          currScore: newCurrScore,
          topScore: newTopScore,
        }
      }

      return {
        clickedEmojiIdsList: newClickedEmojiIdsList,
        currScore: newCurrScore,
      }
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  resetGame = () => {
    this.setState({
      currScore: 0,
      isGameFinished: false,
      clickedEmojiIdsList: [],
    })
  }

  render() {
    const {currScore, topScore, isGameFinished} = this.state

    return (
      <div className="main-bg">
        <NavBar
          currScore={currScore}
          topScore={topScore}
          isGameFinished={isGameFinished}
        />
        <section className="game-section">
          {!isGameFinished && (
            <ul className="emojis-list">
              {this.shuffledEmojisList().map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiObj={eachEmoji}
                  selectEmoji={this.selectEmoji}
                />
              ))}
            </ul>
          )}
          {isGameFinished && (
            <WinOrLoseCard resetGame={this.resetGame} currScore={currScore} />
          )}
        </section>
      </div>
    )
  }
}

export default EmojiGame
