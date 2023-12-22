// rick and morty API
// 3 x 3 MUI cards with all possible info inside each one
// 9 characters initially

// new characters with each refresh
// 826 total characters, pass a random set of character IDs to get the characters "/character/[1,2,3]""

const randomIds = []

function random() {
    // create random numbers 9 times
}

const baseUrl = `https://rickandmortyapi.com/api/character/${}`

export default async function fetchRM() {
    try {
        const res = await fetch(baseUrl);
        const data = res.json()
        return data
    } catch(err) {
        console.error(err)
    } finally {
        console.log("done fetching Rick and Morty characters")
    }
}