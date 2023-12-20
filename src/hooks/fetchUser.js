
// user authenticates > capture username > username is used to fetch user data
// https://api.github.com/users/danielcw7/repos
// username is supplied after authentication

export async function fetchUser(user) {
    const baseUrl = `https://api.github.com/users/${user}`

    try { await fetch(baseUrl) } 
    catch(err) { console.error(err) } 
    finally { console.log("done fetching") }
}
 