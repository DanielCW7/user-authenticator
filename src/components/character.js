import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";

const Character = (props) => {
    const  {name, created, episode, id, type, species, status, gender, image} = props.props

    return (
        <Card variant="outlined">
            <CardContent>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <CardMedia component="img" image={image} sx={{ objectFit: "cover", width: "150px", borderRadius: "50%", margin: "0px auto"}} />
                    <Typography variant="h5" component="h5" sx={{ textAlign: "center" }}> {name} </Typography>             
                </Box>
                <Box sx={{marginTop: "20px"}}>
                    <Typography variant="body2" component="p"> created: {created} </Typography>
                    <Typography variant="body2" component="p"> episode: {episode[0]} </Typography>
                    <Typography variant="body2" component="p"> id: {id} </Typography>
                    <Typography variant="body2" component="p"> type: {type} </Typography>
                    <Typography variant="body2" component="p"> species: {species} </Typography>
                    <Typography variant="body2" component="p"> status: {status} </Typography>
                    <Typography variant="body2" component="p"> gender: {gender} </Typography>                    
                </Box>
                {/* removes the character card */}
                <Button variant="outlined"> Remove </Button>
                
            </CardContent>

        </Card>
    )
}

export default Character