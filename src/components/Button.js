import PropTypes from 'prop-types'

const Button = ({ color, textColor, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color, color: textColor }}
            className='btn'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {

}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button