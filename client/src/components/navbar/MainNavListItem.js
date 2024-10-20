import { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router for navigation
import NavStateContext from '../../context/NavStateContext';
import CurrentViewContext from '../../context/CurrentViewContext';
import UserInfoContext from '../../context/UserInfoContext';

const MainNavListItem = ({ text, to, myIdx }) => {
    const { navIdx, setNavIdx } = useContext(NavStateContext);
    const { setView } = useContext(CurrentViewContext);
    const { user } = useContext(UserInfoContext);

    // Function to handle click event
    const handleClick = () => {
        setNavIdx(myIdx);
        if (user.userName === undefined) {
            setView('guest');
        } else {
            setView('user');
        }
    };

    return (
        <li onClick={handleClick}>
            <Link
                to={to} // Use 'to' instead of 'href'
                className={`text-sm ${navIdx === myIdx ? 'text-blue-600 font-bold' : 'text-gray-400 hover:text-gray-500'}`}
            >
                {text}
            </Link>
        </li>
    );
};

export default MainNavListItem;
