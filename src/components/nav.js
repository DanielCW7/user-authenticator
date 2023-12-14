import { Button } from "@mui/material"
import { useAuth0 } from '@auth0/auth0-react';

const Nav = () => {

    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

    return (
        <nav>
            <a href="/"><Button> Home </Button></a>
            <a href="/test"><Button> Test </Button></a>
            { 
                user 
                ? <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin}})}> logout </Button>                
                : <Button onClick={loginWithRedirect}> Login </Button>
            }
            
        </nav>
    )
}

export default Nav