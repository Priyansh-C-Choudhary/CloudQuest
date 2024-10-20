import Homepage from '../components/homepage/Homepage'
import LandingPage from "../components/landing/LandingPage";
import Layout from "../components/Layout";
import Features from '../components/landing/Features';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import { useContext } from 'react';
import NavStateContext from '../context/NavStateContext';
import CurrentViewContext from '../context/CurrentViewContext';
import ForgetPasswordContainer from '../components/forgetPassword/ForgetPasswordContainer';


const GuestPage = () => {
    const { navIdx } = useContext(NavStateContext);
    const { view } = useContext(CurrentViewContext);

    if (view === "guest")
        return (
            <Layout>
                <LandingPage visible={navIdx === 0} /> {/* Show LandingPage for Home */}
                <Features visible={navIdx === 0} />     {/* Features should appear for Home */}
                {/* Display Homepage only when navIdx corresponds to Categories */}
                {navIdx === 1 && <Homepage visible={true} />} 
                <Login visible={navIdx === 5} />
                <Signup visible={navIdx === 6} />
                <ForgetPasswordContainer visible={navIdx === 7} />
            </Layout>
        );
}

export default GuestPage;

