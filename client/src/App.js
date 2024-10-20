import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoursePage from './pages/CoursePage';
import GuestPage from './pages/GuestPage';
import UserPage from './pages/UserPage';
import Homepage from './components/homepage/Homepage'; // Import the Homepage component
import { useState } from 'react';
import React from 'react';
import NavStateContext from './context/NavStateContext'; 
import CurrentViewContext from './context/CurrentViewContext';
import UserInfoContext from './context/UserInfoContext';
import CourseContextProvider from './context/CourseContext'; 

import { useCookies } from "react-cookie";

function App() {
  const [cookies] = useCookies(['userCookie']);
  const [navIdx, setNavIdx] = useState(0);
  const navIdxValue = { navIdx, setNavIdx };

  // Determine if the user is a guest or logged-in user
  const [view, setView] = useState((cookies['userCookie'] !== undefined ? 'user' : 'guest'));
  const viewValue = { view, setView };

  // Manage user data (logged-in user's data, such as name, courses, etc.)
  const [user, setUser] = useState(cookies['userCookie'] !== undefined ? cookies['userCookie'] : {});
  const userValue = { user, setUser };

  return (
    <div className="App">
      <BrowserRouter>
        <UserInfoContext.Provider value={userValue}>
          <NavStateContext.Provider value={navIdxValue}>
            <CurrentViewContext.Provider value={viewValue}>
              <Routes>
                {/* Route for the main homepage */}
                <Route path="/" element={
                  <CourseContextProvider>
                    {view === 'guest' ? <GuestPage /> : <UserPage />}
                    {view === 'user' && <CoursePage />}
                  </CourseContextProvider>
                } />

                {/* Route for Courses (Homepage component) */}
                <Route path="/courses" element={<Homepage />} />
              </Routes>
            </CurrentViewContext.Provider>
          </NavStateContext.Provider>
        </UserInfoContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
