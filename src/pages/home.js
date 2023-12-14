import { Button, Container } from '@mui/material';
import '../App.css';
import { useAuth0 } from '@auth0/auth0-react';
import sample from "../images/sample.JPG"
import { useEffect, useState } from 'react';
import { fetchUser } from '../hooks/fetchUser';
import { fetchRepos } from '../hooks/fetchProjects';

function App() {

  const { user, isAuthenticated, } = useAuth0();
  const [isRepos, setRepos] = useState("")
  const [userData, setUserData] = useState("")
  
  const test = [
    {"test1": "test"},
    {"test2": "test"}
  ]
  const sadTest = null

  useEffect(() => {
    if(user) {
        const data = fetchUser(user.nickname)
        const repos = fetchRepos(user.nickname)
        setRepos(test)
        setUserData(test)
    } else { return }
  }, [isAuthenticated])

  
  return (
    <div className="App">
        <Container sx={{ border: 'solid red 1px'}}>
            <img src={user?.picture ?? null} className="profilePic" />
            <h1> homepage hero </h1>
            <h2> Welcome, {user?.name ?? "guest"}! </h2>
        </Container>
        {isRepos ? <p>awesome</p> : <p>not awesome</p>}
    </div>
  );
}

export default App;
