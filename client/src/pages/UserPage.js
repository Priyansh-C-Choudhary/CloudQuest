import LandingPage from "../components/landing/LandingPage";
import ContactUs from '../components/contactus/ContactUs';
import Features from '../components/landing/Features';
import { useContext } from 'react';
import NavStateContext from '../context/NavStateContext';
import CurrentViewContext from '../context/CurrentViewContext';
import LoggedInLayout from '../components/LoggedIn/LoggedInLayout';
import AccountInfo from '../components/LoggedIn/AccountInfo';
import Homepage from '../components/homepage/Homepage';

const UserPage = () => {
    const { navIdx } = useContext(NavStateContext);
    const { view } = useContext(CurrentViewContext);

    if (view === "user")
        return (
            <LoggedInLayout>
                <LandingPage visible={navIdx === 0} /> {/* Show LandingPage for Home */}
                <Features visible={navIdx === 0} />     {/* Features should appear for Home */}
                {/* Display Homepage only when navIdx corresponds to Categories */}
                {navIdx === 1 && <Homepage visible={true} />} 
                <ContactUs visible={navIdx === 4} />
                <AccountInfo visible={navIdx === 8} />
            </LoggedInLayout>
        )
}

export default UserPage;
