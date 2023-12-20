import { Button, Container, Box } from '@mui/material';
import '../styles/App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { fetchUser } from '../hooks/fetchUser';
import { fetchProjects } from '../hooks/fetchProjects';
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

    const populate = async () => {
      // set loading state
      try {

        // const data = await fetchProjects(user.nickname)
        const repos = test.map(props => <Repo data={props} />)
        setRepos(repos)
      } catch(err) {
        console.error(err)
      } finally {
        console.log("done")
        // set loading false
      }
    }  
    
    useEffect(() => {
    user && populate()
  }, [isAuthenticated])


  return (
    <div className="App">
      <Box sx={{ background: 'gray'}}>
        <Container sx={{ padding: "50px 0px"}}>
            <img src={user?.picture ?? null} className="profilePic" />
            <h1> Welcome, {user?.name ?? "guest"}! </h1>
        </Container>        
      </Box>

      <Box sx={{ backgroundColor: "#e6e6e6"}}>
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
            {isRepos ? isRepos : <p>not awesome</p>}          

        </Container>        
      </Box>


    </div>
  );
}

export default App;
