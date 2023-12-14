import { Card } from "@mui/material"

const Repo = (data) => {
    return (
        <Card>
            <p>name: {data?.name ?? "err"}</p>
            <p>language: {data?.langauge ?? "err"}</p>
            <p>forks: {data?.forks ?? "err"}</p>
            <p>login: {data?.owner.login ?? "err"}</p>
        </Card>
    )
}

export default Repo