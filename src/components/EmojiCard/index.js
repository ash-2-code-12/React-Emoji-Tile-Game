import './index.css'

const EmojiCard = props => {
  const {emojiObj, selectEmoji} = props
  const {id, emojiName, emojiUrl} = emojiObj
  const onEmojiClick = () => {
    selectEmoji(id)
  }

  return (
    <li onClick={onEmojiClick} className="emoji-card">
      <button type="button" className="emoji-card-btn">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
