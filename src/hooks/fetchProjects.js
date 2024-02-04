import axios from "axios";

export async function fetchProjects(user) {
    const baseUrl = `https://api.github.com/users/${user}/repos`;

    try{
        const response = await axios.get(baseUrl)
        return response.data
    } catch(err) {
        console.error(err)
    }

    // try {
    //     const data = await fetch(baseUrl)
    //     const response = await data.json()
    //     return response
    // } catch(err) {
    //     console.error(err)
    // }
}