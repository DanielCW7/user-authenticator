

export async function fetchRepos(user) {
    
    const baseUrl = `https://api.github.com/users/${user}/repos`
    try {
        // await fetch(baseUrl)
        // .then(res => res.json())
        // .then(data => console.log(data))
    } catch(err) {
        console.error(err)
    } finally {
        console.log("done fetching repos")
    }
}