import { Button, Container, Box } from '@mui/material';
import '../styles/App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { fetchUser } from '../hooks/fetchUser';
import { fetchProjects } from '../hooks/fetchProjects';
import Repo from "../components/repo";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


function App() {

  const { user, isAuthenticated, } = useAuth0();
  const [isRepos, setRepos] = useState([])
  const [userData, setUserData] = useState("")

  const columns = [
    {field: "Project", headerName: "Project", width: 150},
    {field: "Owner", headerName: "Owner", width: 150},
    {field: "Language", headerName: "Language", width: 150},
    {field: "Forks", headerName: "Forks", width: 150},
    {field: "Watchers", headerName: "Watchers", width: 150},
    {field: "id", headerName: "Project ID", width: 150}
  ]

  const rows = isRepos || {}
  console.log(isRepos, columns)

    const populate = async () => {

      try {
        const data = await fetchProjects(user.nickname)
        console.log(data)  

        const rows = [
          // {id: 1, col1: "Auth App", col2: "DanielCW7", col3: "Javascript", col4: "0", col5: "1"},
        ]

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
        // setRepos(rows)
      } catch(err) {
        console.error(err)
      } finally {
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
            <sub> nickname: {user?.nickname ?? ""} </sub><br/>
            <sub> email: {user?.email ?? ""} </sub>
        </Container>        
      </Box>


      <Box sx={{ backgroundColor: "#e6e6e6"}}>
        <Container>
          {/* populate rows with project data */}
          <DataGrid rows={rows} columns={columns} initialState={{
            pagination: { paginationModel: { pageSize: 5 } }
          }} pageSizeOptions={[5, 25, 50, 100]}/>
        </Container>          
     
      </Box>
    </div>
  );
}

export default App;
