import { Box, Typography, CardContent, CardActions, Card } from "@mui/material"


const Repo = (data) => {

    const {id, owner, language, forks, name, html_url } = data.data   

    // github repo url = html_url
    
    return (
            <Box sx={{
                borderRadius: "5px",
                background: "#fff",
                overflow: "hidden"
            }}>

                <Typography 
                    variant="h6" 
                    component="h6"
                    sx={{ 
                        padding: "15px 10px", 
                        textAlign: "left",
                    }}
                > {name ?? "err"} </Typography>
                
                <Box sx={{display: "flex", flexDirection: "column", padding: "15px 10px", gap: "0px"}}>
                    
                    <Box sx={{ display: "flex", textAlign: "left", gap: "10px"}}>
                        <Typography variant="body" component="p"> Owner: {owner?.login ?? "danielCW7"} </Typography>
                    </Box>  

                    <Box sx={{ display: "flex", textAlign: "left", gap: "10px"}}> 
                        <Typography variant="body" component="p"> Language: {language ?? "undefined"} </Typography>
                    </Box>

                    <Box sx={{ display: "flex", textAlign: "left", gap: "10px"}}>
                        <Typography variant="body" component="p"> Forks: {forks ?? "0"} </Typography>
                    </Box>
                    
                </Box>
                    {/* card actions dropdown for project description? */}                  
            </Box>


    )
}

export default Repo