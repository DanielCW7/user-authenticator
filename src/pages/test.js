import { useAuth0 } from '@auth0/auth0-react';
import { Container, Box, Card, Typography, Button, CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchRM, fetchOneRM }  from '../hooks/fetchRM';
import Character from '../components/character';

const Test = () => {
const { user, isAuthenticated } = useAuth0();

const [isCharacters, setCharacters] = useState("");

const populate = async () => {
    try {
        const data = await fetchRM()
        const formatted = data.map(character => <Character props={character} />)
        setCharacters(formatted)
    } catch(err) {
        console.error(err)
    }   
}

const addCharacter = async () => {
    try {
        const data = await fetchOneRM();
        const newCharacter = <Character props={data} />;

        setCharacters(prevList => [...prevList, newCharacter])
        // append returned character to the DOM from here
    } catch(err) {
        console.error("error adding a character", err)
    }
}
useEffect(() => {
    populate()
}, [])


    return (
        <main className="App">
                
                <div>
                    <Container>
                        <h1> Test page </h1>
                        { isAuthenticated && <div> {user.nickname} is logged in </div>}              
                    </Container>
                    <Container id="characterGrid" sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(1, minmax(0, 1fr))",
                            md: "repeat(2, minmax(0, 1fr))",
                            lg: "repeat(3, minmax(0, 1fr))",
                        },
                        gap: "20px"
                    }}>
                        {isCharacters ? isCharacters : null}
                    </Container> 
                    <Card>
                        <CardContent>
                            <Button onClick={addCharacter}> Add Character </Button>
                        </CardContent>
                    </Card>                  
                </div>
        </main>
    )
}

export default Test