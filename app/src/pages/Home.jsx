import {useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types';
import Button from "../components/button.jsx";

const Home = (props) => {
    const {loggedIn} = props

    const navigate = useNavigate()

    const onButtonClick = () => {
        if (loggedIn) props.setLoggedIn(false) /* Замінне наповнення для прикладу */
        navigate('/login')
    }

    return (
        <div className='content'>
            <p className='body-text'>Це головна сторінка</p>
            <Button
                value={loggedIn ? 'Вийти з облікового запису' : 'Увійти в обліковий запис'}
                onClickAction={onButtonClick} />
        </div>
    )
}

Home.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
}

export default Home