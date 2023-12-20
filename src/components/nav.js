import { Box, Button, Container } from "@mui/material"
import { useAuth0 } from '@auth0/auth0-react';

const Nav = () => {

    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

    return (
        <Box component="nav">
            <Container sx={{ display: "flex", flexDirection: "row-reverse"}}>
                <a href="/"><Button> Home </Button></a>
                <a href="/test"><Button> Test </Button></a>
                { 
                    user 
                    ? <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin}})}> logout </Button>                
                    : <Button onClick={loginWithRedirect}> Login </Button>
                }                
            </Container>

            
        </Box>
    )
}

export default Nav