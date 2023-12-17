import { Card, Box, Typography, CardContent, CardActions, Grid } from "@mui/material"

const Repo = (data) => {
    return (
            <Box sx={{
                borderRadius: "5px",
                padding: "10px 0px",
                background: "#efefef"
            }}>
                <Typography variant="h5" component="h5" sx={{ margin: "10px 0px"}}>
                    {/* name: {data?.name ?? "err"} */}
                    Auth App
                </Typography>
                <Box sx={{display: "flex", justifyContent: "center", gap: "20px"}}>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        <Typography variant="body" component="p">Language</Typography>
                        <Typography variant="body2" component="p">{data?.langauge ?? "err"}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        <Typography variant="body" component="p">Forks</Typography>
                        <Typography variant="body2" component="p">{data?.forks ?? "err"}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        <Typography variant="body" component="p">Owner</Typography>
                        <Typography variant="body2" component="p">{data?.owner ?? "err"}</Typography>
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