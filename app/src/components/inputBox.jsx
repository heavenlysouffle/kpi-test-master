import PropTypes from 'prop-types'
import '../compiled-css/inputBox.css'

const InputBox = ({ id, type='text', value, placeholder='Текст-заповнювач', onChangeAction,
                      error='Текст помилки', autoComplete}) => {
    return (
        <div className='input-container'>
            <input
                id={id}
                className='input-box caption'
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(ev) => onChangeAction(ev.target.value)}
                autoComplete={autoComplete}
            />
            <label className='error caption'>{error}</label>
        </div>
    )
}

InputBox.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeAction: PropTypes.func.isRequired,
    autoComplete: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
}

export default InputBox