import { Box, Button, Container } from "@mui/material"
import { useAuth0 } from '@auth0/auth0-react';

const Nav = () => {

    const { user, logout } = useAuth0();

    return (
        <Box component="nav" sx={{backgroundColor: "#efefef"}}>
                {
                    user ?
                    <Container sx={{ display: "flex", flexDirection: "row-reverse"}}>
                        <a href="/"><Button> Home </Button></a>
                        <a href="/test"><Button> Test </Button></a>
                        
                        <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin}})}> logout </Button>                
                    </Container>
                    : null
                }
        </Box>
    )
}

export default Nav