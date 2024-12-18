import '../compiled-css/header.css'

const Header = () => {
    return (
        <header>
            <div className='header-wrapper login'>
                <div className='header-logo-title'>
                    <a href='#'>
                        <img src='../assets/images/svg/logo.svg' alt='Логотип "IPZE Test"' className='header-logo'/>
                    </a>
                    <h4 className='logo'>IPZE Test</h4>
                </div>
            </div>
        </header>
    );
};

export default Header;