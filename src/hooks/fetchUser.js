
// user authenticates > capture username > username is used to fetch user data
// https://api.github.com/users/danielcw7/repos
// username is supplied after authentication
import axios from "axios"

export async function fetchUser(user) {
    const baseUrl = `https://api.github.com/users/${user}`

    try { await axios.get(baseUrl) } 
    catch(err) { console.error(err) } 
}
 