// rick and morty API
// 3 x 3 MUI cards with all possible info inside each one
// 9 characters initially

// new characters with each refresh
// 826 total characters, pass a random set of character IDs to get the characters "/character/[1,2,3]""
import axios from "axios";

const randomIds = [];

function randomSet() {
    // create random numbers 9 times and insert into empty array
    for(let i = 0; i != 9; i++) {
        randomIds.push(Math.floor(Math.random() * 826))
    }
};

randomSet();

const baseUrl = `https://rickandmortyapi.com/api/character/${randomIds}`;

export async function fetchRM() {
    try {
        const response = await axios.get(baseUrl);
        return response.data
    } catch(err) {
        console.error(err);
    }
};

    


export async function fetchOneRM() {
    let randomSingleId = Math.floor(Math.random() * 826);   
    const baseUrlSingle = `https://rickandmortyapi.com/api/character/${randomSingleId}`;

    try {
        const response = await axios.get(baseUrlSingle);
        return response.data
    } catch(err) {
        console.error(err);
    }
};