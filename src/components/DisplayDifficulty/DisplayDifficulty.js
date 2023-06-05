import React from 'react'
import style from './style.module.css'

export default function DisplayDifficulty(props) {
  return (
    <div className={style.container}>
        <p>{props.difficulty ? `Difficulty set to : ${props.difficulty}` : "No difficulty"}</p>
        

    </div>
  )
}
