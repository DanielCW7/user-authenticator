import logo from './logo.svg';
import './App.css';
import { fetchUser } from './hooks/fetchUser';
import { useAuth0 } from '@auth0/auth0-react';


function App() {

  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  
  function logging() {
    console.log(user)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>

      {/* https://api.github.com/users/danielcw7/repos */}
      <button onClick={fetchUser}> fetch user </button>
      <button onClick={loginWithRedirect}> login </button>
      <button onClick={logging}> log user </button>
      { isAuthenticated && <div> logged in as {user.nickname} </div> }

      </header>
    </div>
  );
}

export default App;
