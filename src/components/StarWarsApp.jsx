import { BuscarCharacter } from "./BuscarCharacter"
import { ContenedorPokemon } from "./ContenedorPokemones"
import { useStarWars } from "../hooks/useStarWars"
 
export const StarWarsApp = () => {
 
    const { handleGetStarWars, character } = useStarWars()
 
    return (
        <>
            <BuscarCharacter handleGetStarWars={handleGetStarWars} />
            <ContenedorPokemon pokemon={pokemon} />
        </>
    )
}