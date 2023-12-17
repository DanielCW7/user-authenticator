import { Button, Container, Box } from '@mui/material';
import '../App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { fetchUser } from '../hooks/fetchUser';
import { fetchRepos } from '../hooks/fetchProjects';
import Repo from "../components/repo";

function App() {

  const { user, isAuthenticated, } = useAuth0();
  const [isRepos, setRepos] = useState("")
  const [userData, setUserData] = useState("")
  
  const test = [
    {"test1": "test"},
    {"test1": "test"},    
    {"test1": "test"},    
    {"test1": "test"},    
    {"test2": "test"}
  ]

  useEffect(() => {
    if(user) {
        const data = fetchUser(user.nickname)
        const repos = fetchRepos(user.nickname)
        setRepos(test)
        setUserData(test)
    } else { return }
  }, [isAuthenticated])

  const array = test.map(item => {
    return <Repo />
  })
  
  return (
    <div className="App">
      <Box sx={{ background: 'gray'}}>
        <Container sx={{ padding: "50px 0px"}}>
            <img src={user?.picture ?? null} className="profilePic" />
            <h1> homepage hero </h1>
            <h2> Welcome, {user?.name ?? "guest"}! </h2>
        </Container>        
      </Box>

        <Container sx={{
          display: "grid",
          gridGap: "20px",
          padding: "10px 10px", 
          gridTemplateColumns: {
            xs: "repeat(1, minmax(100px, 1fr))",
            md: "repeat(2, minmax(100px, 1fr))",
            lg: "repeat(3, minmax(100px, 1fr))"
          }
        }}>
            {isRepos ? array : <p>not awesome</p>}          

        </Container>

    </div>
  );
}

export default App;
