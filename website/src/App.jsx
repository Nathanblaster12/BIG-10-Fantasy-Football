import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DraftPage from './components/DraftPage';
import League from './components/LeaguePage';
import { Auth0Provider } from '@auth0/auth0-react';
function App() {
  return (
    <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <div>
          <BrowserRouter>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/draft_page" element={<DraftPage />} />
            <Route path = "/league_page" element = {<League />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Auth0Provider>

);
}

export default App;
