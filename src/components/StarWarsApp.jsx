import { BuscarCharacter } from "./BuscarCharacter";
import { ContenedorCharacter } from "./ContenedorCharacter";
import { useStarWars } from "../hooks/useStarWars";

export const StarWarsApp = () => {
    const { handleGetStarWars, character, planet } = useStarWars();

    return (
        <>
            <div style={{
            backgroundImage: 'url(https://i.ibb.co/RTKMNgj/star-wars-logo.webp)',
            minHeight: '100vh',
            color: 'white',
        }}>
            <BuscarCharacter handleGetStarWars={handleGetStarWars} />
            <ContenedorCharacter character={character} planet={planet} />
            </div>
        </>
    )
}