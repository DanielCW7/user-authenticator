import { Card, Box, Typography, CardContent, CardActions, Grid } from "@mui/material"

const Repo = (data) => {
    return (
            <Box sx={{
                borderRadius: "5px",
                background: "#efefef",
                overflow: "hidden"
            }}>

                <Typography 
                    variant="h6" 
                    component="h6" 
                    sx={{ padding: "15px 10px", background: "red", textAlign: "left"}}
                >{/* name: {data?.name ?? "err"} */}Auth App</Typography>
                
                <Box sx={{display: "flex", padding: "15px 10px", gap: "20px"}}>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        <Typography variant="body" component="p">Language</Typography>
                        <Typography variant="body2" component="p">{data?.langauge ?? "0"}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        <Typography variant="body" component="p">Forks</Typography>
                        <Typography variant="body2" component="p">{data?.forks ?? "0"}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        <Typography variant="body" component="p">Owner</Typography>
                        <Typography variant="body2" component="p">{data?.owner ?? "danielCW7"}</Typography>
                    </Box>                   
                </Box>
                    {/* card actions dropdown for project description? */}
                    {/* links to demo and code */}
                    {/*              
                        <p>language: {data?.langauge ?? "err"}</p>
                        <p>forks: {data?.forks ?? "err"}</p>
                        <p>login: {data?.owner?.login ?? "err"}</p> */
                    }                    
            </Box>


    )
}

export default Repo