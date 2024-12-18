import PropTypes from 'prop-types'
import '../compiled-css/button.css'

const Button = ({value='Кнопка', style='filled black', onClickAction}) => {
    return (
        <div className='input-container'>
            <input
                className={`button ${style} button-text`}
                type='button'
                onClick={onClickAction}
                value={value}
            />
        </div>
    );
};

Button.propTypes = {
    onClickAction: PropTypes.func.isRequired,
    value: PropTypes.string,
    style: PropTypes.string,
};

export default Button;