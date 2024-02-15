import { Button, Container, Box, TextField } from '@mui/material';
import '../styles/App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { fetchProjects } from '../hooks/fetchProjects';
import Loader from '../components/loader';

function App() {

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [isRepos, setRepos] = useState([])
  const [filteredList, setFilter] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [pageSize, setPageSize] = useState(5);
 
  useEffect(() => {
    const populate = async () => {
      setLoading(true)
    
        try {
          const data = await fetchProjects(user.nickname);
          const rows = [];
          data.map(props => {
            return rows.push({
              "Project": props.name, 
              "Language": props.language, 
              "Forks": props.forks, 
              "id": props.id
            });
          });

          setRepos(rows);
          setFilter(rows);
        } catch(err) {
          console.error(err);
        } finally {
          setLoading(false);
        }              
    }
    console.log(user)
    populate();
  }, [isAuthenticated, user]);

  const filter = (prop, repos) => {
    const search = prop.target.value.toLowerCase();
    const result = repos.filter(project => project.Project.toLowerCase().includes(search));
    setFilter(result);
  }


  return (
    <main className="App">

      {isLoading ? <Loader/> : null}
      {/* instead of 'null' return the result of the page. authenticated or log in */}
      { 
        isAuthenticated ? 
          <>
            <Box sx={{ background: 'gray'}}>
              <Container sx={{ padding: "50px 0px"}}>
                  <img src={user?.picture ?? null} className="profilePic" />
                  <h1> Welcome, {user?.name ?? "guest"}! </h1>
                  <sub> nickname: {user?.nickname ?? ""} </sub><br/>
                  <sub> email: {user?.email ?? ""} </sub>
              </Container>        
            </Box>

            <Box sx={{ backgroundColor: "#e6e6e6" }}>
            <Container sx={{paddingTop: '20px'}}>
              <TextField fullWidth id="outlined-basic" label="Search Project" variant="outlined" onChange={(prop) => filter(prop, isRepos)} />
              <table>
                <thead>
                  <tr>
                    <td> Project </td>
                    <td> Language </td>
                    <td> Id </td>
                  </tr>
                </thead>
                <tbody>
                  {
                    filteredList && filteredList.slice(0, pageSize).map(repo => {
                      return (
                        <tr key={repo.id}>
                          <td>{repo.Project}</td>
                          <td>{repo.Language}</td>
                          <td>{repo.id}</td>
                        </tr>
                      )
                    })
                  }                  
                </tbody>

              </table>
              {/* button to show more projects */}
              {pageSize < filteredList.length ? <button className='add-btn' onClick={() => setPageSize(pageSize + 5)}> more </button> : null}
            </Container> 
                     
            </Box> 
          </> 
          : 
          <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center"
          }}>
            <h1> please Log in </h1>
            <Button onClick={loginWithRedirect} sx={{width: "max-content", margin: "0px auto"}}> Login </Button>
          </Box>
      }
        
    </main>
  );
}

export default App;
