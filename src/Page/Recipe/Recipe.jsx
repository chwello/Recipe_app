import React from 'react'

const Recipe = ({title, calories, image, ingredients, description

}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Calories {calories}</p>

      <img src={image} alt="" />
      <p>{description}</p>
      <ul>
        {ingredients.map(ingredients => (
          <li>{ingredients.text}</li>
        ))}
      </ul>

     
    </div>
  )
}

export default Recipe