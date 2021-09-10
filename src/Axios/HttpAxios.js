import axios from "axios"


export const getDataAsync = async (url="https://jsonplaceholder.typicode.com/posts") =>
{
    try {
        const data = await axios.get(url)
        return data
    } catch (error) {
        throw new Error(error)
    }
}