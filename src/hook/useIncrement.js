import {useState} from "react"

export const useIncrement = () =>
{
    const [inc, setInc] = useState(1)
    
    return {inc,setInc}
}