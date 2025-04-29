import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Food Donation</h1>
            <div className="actions">
                <Link to="/donate" className="btn">Donate Food</Link>
                <Link to="/getfood" className="btn">Request Food</Link>
            </div>
        </div>
    );
};

export default Home;