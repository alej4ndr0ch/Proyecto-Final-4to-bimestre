import { useState } from "react"
import { reqStarWars } from "../service/pokemon"
 
export const useStarWars = () => {
 
    const [character, setCharacter] = useState(null)
 
    const handleGetStarWars = (e, character) => {
        e.preventDefault()
        reqStarWars(character).then(() => {
            setPeople(peopleData)
        }).catch(err => {
            console.error(err)
            setPeople(null)
        })
    }
 
    return {
        handleGetStarWars,
        character
    }
}