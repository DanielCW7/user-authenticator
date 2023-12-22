import { useAuth0 } from '@auth0/auth0-react';
import { Container, Box, Card, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import fetchRM from '../hooks/fetchRM';

const Test = () => {
const { user, isAuthenticated } = useAuth0();

const [isCharacters, setCharacters] = useState("");

const populate = async () => {
    try {
        const data = await fetchRM()
        console.log(data.results)
        // map over characters with Cards before inserting them into state
    } catch(err) {
        console.error(err)
    } finally {
        console.log("done fetching api")
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
                <Card>
                    {/* sample card contents */}
                    <Typography> Ants in my Eyes Johnson </Typography>
                    <Typography> 2017-11-04T22:34:53.659Z </Typography>
                    <Typography> https://rickandmortyapi.com/api/episode/8 </Typography>
                    <Typography> 20 </Typography>
                    <Typography> https://rickandmortyapi.com/api/character/avatar/20.jpeg </Typography>
                    <Typography> Interdimensional Cable </Typography>
                    <Typography> Human </Typography>
                    <Typography> unknown </Typography>
                    <Typography> Human with ants in his eyes </Typography>

                </Card>
            </Container>
        </main>
    )
}

export default Test