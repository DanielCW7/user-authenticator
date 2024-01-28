import { Button, Container, Box } from '@mui/material';
import '../styles/App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { fetchUser } from '../hooks/fetchUser';
import { fetchProjects } from '../hooks/fetchProjects';
import Repo from "../components/repo";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Loader from '../components/loader';

function App() {

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [isRepos, setRepos] = useState([])
  // const [userData, setUserData] = useState("")
  const [isLoading, setLoading] = useState(false)

  const columns = [
    {field: "Project", headerName: "Project", width: 150},
    {field: "Owner", headerName: "Owner", width: 150, filterable: false},
    {field: "Language", headerName: "Language", width: 150, filterable: false},
    {field: "Forks", headerName: "Forks", width: 150, filterable: false},
    {field: "Watchers", headerName: "Watchers", width: 150, filterable: false},
    {field: "id", headerName: "Project ID", width: 150, filterable: false}
  ]

  const rows = isRepos || {}
  const populate = async () => {
    setLoading(true)
  
      try {
        const data = await fetchProjects(user.nickname)

        const rows = []
        data.map(props => {
          return rows.push({
            "Project": props.name, 
            "Owner": props.owner.login, 
            "Language": props.language, 
            "Forks": props.forks, 
            "Watchers": props.watchers,
            "id": props.id
          })
        })

        setRepos(rows)
      } catch(err) {
        console.error(err)
      } finally {
        setLoading(false)
      }              
    }  
    
    useEffect(() => {
    populate()
  }, [isAuthenticated, user])


  return (
    <main className="App">
      {isLoading ? <Loader/> : null}
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
              <Container>
                {/* populate rows with project data */}
                <DataGrid rows={rows} columns={columns} initialState={{
                  pagination: { paginationModel: { pageSize: 5 } }
                }} pageSizeOptions={[5, 25, 50, 100]}/>
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
