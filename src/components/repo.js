import { Box, Typography, CardContent, CardActions, Card } from "@mui/material"

const Repo = (data) => {

    const {id, owner, language, forks, name, html_url } = data.data   

    // github repo url = html_url
    return (
            <Box sx={{
                borderRadius: "5px",
                background: "#efefef",
                overflow: "hidden"
            }}>

                <Typography 
                    variant="h6" 
                    component="h6"
                    sx={{ 
                        padding: "15px 10px", 
                        textAlign: "left",
                        backgroundColor: "red"
                    }}
                > {name ?? "err"} </Typography>
                
                <Box sx={{display: "flex", padding: "15px 10px", gap: "20px"}}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignSelf: "center", gap: "10px", background: ""}}>
                        <Typography variant="body" component="p">Owner</Typography>
                        <Typography variant="body" component="p">{owner?.login ?? "danielCW7"}</Typography>
                    </Box>                    
                    <Box sx={{ display: "flex", justifyContent: "center", alignSelf: "center", gap: "10px"}}>
                        <Typography variant="body" component="p">Language</Typography>
                        <Typography variant="body" component="p">{language ?? "none"}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignSelf: "center", gap: "10px"}}>
                        <Typography variant="body" component="p">Forks</Typography>
                        <Typography variant="body" component="p">{forks ?? "0"}</Typography>
                    </Box>
                   
                </Box>
                    {/* card actions dropdown for project description? */}                  
            </Box>


    )
}

export default Repo