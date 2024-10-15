import PropTypes from "prop-types"

const Card = ({ children, customClassname }) => {
  return (
    <article 
      className={`card${customClassname ? ' ' + customClassname : ''}`}
    >
      {children}
    </article>
  )
}

export default Card

Card.propTypes = {
  children: PropTypes.element.isRequired,
  customClassname: PropTypes.string,
}