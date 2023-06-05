import React from 'react'
import MenuListItem from '../MenuListItem/MenuListItem'
import style from './style.module.css'

export default function MenuList({difficulty, onItemClick, isSelected}) {
  return (
    <div className={style.container}>
        <MenuListItem 
        onClick = {onItemClick} 
        difficulty ="Low" 
        isSelected = {difficulty == "Low"}/>

        <MenuListItem 
        onClick = {onItemClick} 
        difficulty="Medium" 
        isSelected = {difficulty == "Medium"}/>

        <MenuListItem 
        onClick = {onItemClick} 
        difficulty ="High" 
        isSelected = {difficulty == "High"}/>

        <MenuListItem 
        onClick = {onItemClick} 
        difficulty ="Insane" 
        isSelected = {difficulty == "Insane"}/>
    </div>
  )
}
