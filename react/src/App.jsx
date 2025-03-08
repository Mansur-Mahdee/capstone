import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import OverviewPage from './components/OverviewPage';
import GoalsPage from './components/GoalsPage';
import TransactionsPage from './components/TransactionsPage';


function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/overview" element={<OverviewPage />} />
                    <Route path="/goals" element={<GoalsPage />} />
                    <Route path="/transactions" element={<TransactionsPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;