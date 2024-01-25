import { Button, Box } from "@mui/material";
import spinner from "../images/spinner.png";

const Loader = () => {

    return (
        <Box className="spin-container">
            <img src={spinner} className="spin"/>
        </Box>
    )
}

export default Loader