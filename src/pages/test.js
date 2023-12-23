import { useAuth0 } from '@auth0/auth0-react';
import { Container, Box, Card, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import fetchRM from '../hooks/fetchRM';
import Character from '../components/character';

const Test = () => {
const { user, isAuthenticated } = useAuth0();

const [isCharacters, setCharacters] = useState("");

const populate = async () => {
    try {
        const data = await fetchRM()
        console.log("data is: ", data)
        const formatted = data.map(character => <Character props={character} />)

        setCharacters(formatted)
    } catch(err) {
        console.error(err)
    } finally {
        console.log(isCharacters)
    }    
}


useEffect(() => {
    populate()
}, [])


    return (
        <main>
            <h1> Test page </h1>
            { isAuthenticated && <div> {user.nickname} is logged in </div>}
            
            <Container>
                {isCharacters ? isCharacters : <p>err</p>}
            </Container>
        </main>
    )
}

export default Test