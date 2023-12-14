import { useAuth0 } from '@auth0/auth0-react';



const Test = () => {
const { user, isAuthenticated } = useAuth0();



    return (
        <main>
            <h1> Test page </h1>
            { isAuthenticated && <div> {user.nickname} is logged in </div>}
        </main>
    )
}

export default Test