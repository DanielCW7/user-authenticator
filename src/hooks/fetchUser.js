
// user authenticates > capture username > username is used to fetch user data

// username is supplied after authentication
export async function fetchUser(user) {
    const me = "danielcw7" // this will be deleted once able to capture username
    
    const baseUrl = `https://api.github.com/users/${me}`
    try {
        await fetch(baseUrl)
        .then(res => res.json())
        .then(data => console.log(data))
    } catch(err) {
        console.error(err)
    } finally {
        console.log("done fetching")
        console.log(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_DOMAIN)
    }
}
 