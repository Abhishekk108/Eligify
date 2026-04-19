import './Badge.css'

const Badge = ({ children, status = 'pending' }) => {
  return (
    <span className={`badge badge-${status}`}>
      {children}
    </span>
  )
}

export default Badge
