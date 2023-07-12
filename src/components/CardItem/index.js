import React from 'react'
import './index.css'

const CardItem = (props) => {
    const {eachItem,cardClicked}=props
    const name = eachItem ; 
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);

    const buttonClicked=()=>{
        cardClicked(eachItem)
    }

  return (
    <li>
    <button className="card" onClick={buttonClicked}>
        <h1 className="card-heading">{capitalized}</h1>
        <p className="card-description">Unlimited Jokes On{capitalized}</p>
    </button>
    </li>
  )
}

export default CardItem