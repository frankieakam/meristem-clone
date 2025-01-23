import './App.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <img src="/logos/meristem-logo.jpeg" alt="Meristem-Logo" /> 
                
                <span className="text">
                    <span className="separator">|</span>
                    <span className="properties">Properties</span>
                </span>
                
                <nav>
                    <ul className='nav-links'>
                        <li>Marketplace</li>
                        <li>Products</li>
                        <li>Blog</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;