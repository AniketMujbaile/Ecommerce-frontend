import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Routes from './Routes';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
 