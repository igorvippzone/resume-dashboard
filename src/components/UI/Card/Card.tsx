import React from 'react'

import s from './Card.module.scss'

type CardProps = {
  children: React.ReactNode,
  className?: string 
}

const Card: React.FC<CardProps> = ({children, className=''}) => {
  return (
    <div className={`${s.card} ${className}`}>{children}</div>
  )
}

export default Card