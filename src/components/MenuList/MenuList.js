import React from 'react'
import MenuListItem from '../MenuListItem/MenuListItem'
import style from './style.module.css'
import { DIFFICULTIES } from './constant'

export default function MenuList({difficulty, onItemClick, isSelected}) {


  return (
    <div className={style.container}>
        {
            DIFFICULTIES.map((diff) => (
                <MenuListItem 
                    onClick = {onItemClick} 
                    difficulty ={diff} 
                    isSelected = {difficulty == diff}/>
            ) )
        }
    </div>
  )
}
