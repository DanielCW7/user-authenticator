import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <button onClick={loginWithRedirect}> login </button>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin}})}> logout </button>

      { isAuthenticated && <p> logged in as {user.nickname} </p> }
      </header>
    </div>
  );
}

export default App;
