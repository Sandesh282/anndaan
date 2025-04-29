import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/donate">Donate Food</Link>
            <Link to="/getfood">Get Food</Link>
        </nav>
    );
};

export default Navbar;