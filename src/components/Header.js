import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title }) => {
    const location = useLocation()
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    "title": "React Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string
}



export default Header