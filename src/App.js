import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component
import HomePage from './pages/HomePage'; // Example page
import TeamPage from './pages/TeamPage'; // Example page
import SupportPage from './pages/SupportPage'; // Example page

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><HomePage /></Layout>} />
                <Route path="/team" element={<Layout><TeamPage /></Layout>} />
                <Route path="/support" element={<Layout><SupportPage /></Layout>} />
            </Routes>
        </Router>
    );
}

export default App;
