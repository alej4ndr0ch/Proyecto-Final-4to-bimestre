import { BuscarCharacter } from "./BuscarCharacter";
import { ContenedorCharacter } from "./ContenedorCharacter";
import { useStarWars } from "../hooks/useStarWars";

export const StarWarsApp = () => {
    const { handleGetStarWars, character, planet } = useStarWars();

    return (
        <>
            <BuscarCharacter handleGetStarWars={handleGetStarWars} />
            <ContenedorCharacter character={character} planet={planet} />
        </>
    );
};