

export async function fetchProjects(user) {
    
    const baseUrl = `https://api.github.com/users/${user}/repos`;

    try {
        const data = await fetch(baseUrl)
        const response = await data.json()
        return response
    } catch(err) {
        console.error(err)
    } finally {
        console.log("done fetching repos")
    }
}