import { Card, CardContent, Typography } from "@mui/material";

const Character = (props) => {
    const  {name, created, episode, id, type, species, status, gender, image} = props.props
    console.log(props)

    return (
        <Card>
            <img src={image} />
            <p> {name} </p>
            <p> {created} </p>
            <p> {episode} </p>
            <p> {id} </p>
            <p> {type} </p>
            <p> {species} </p>
            <p> {status} </p>
            <p> {gender} </p>
        </Card>
    )
}

export default Character