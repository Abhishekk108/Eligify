import { forwardRef } from 'react'
import './Card.css'

const Card = forwardRef(({ children, className = '' }, ref) => {
  return (
    <div ref={ref} className={`card ${className}`}>
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export default Card
