import React, {useState} from 'react'
import './index.css'

const FruitsCounter = () => {
  const [mangoCount, setMangoCount] = useState(0)
  const [bananaCount, setBananaCount] = useState(0)

  const handleEatMango = () => {
    setMangoCount(mangoCount + 1)
  }

  const handleEatBanana = () => {
    setBananaCount(bananaCount + 1)
  }

  return (
    <div className="fruits-counter">
      <h1>
        Bob ate {mangoCount} mangoes {bananaCount} bananas
      </h1>
      <div className="fruit">
        <img
          src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
          alt="mango"
          className="fruit-image"
        />
        <button className="eat-button" onClick={handleEatMango}>
          Eat Mango
        </button>
        <p className="count">Mangoes eaten: {mangoCount}</p>
      </div>
      <div className="fruit">
        <img
          src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
          alt="banana"
          className="fruit-image"
        />
        <button className="eat-button" onClick={handleEatBanana}>
          Eat Banana
        </button>
        <p className="count">Bananas eaten: {bananaCount}</p>
      </div>
    </div>
  )
}

export default FruitsCounter
