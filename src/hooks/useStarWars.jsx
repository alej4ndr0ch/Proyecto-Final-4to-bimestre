import { useState } from "react";
import { reqStarWarsPeople, reqStarWarsPlanets } from "../service/character";

export const useStarWars = () => {
    const [character, setCharacter] = useState(null);
    const [planet, setPlanet] = useState(null);

    const handleGetStarWars = async (e, searchTerm) => {
        e.preventDefault();

        try {
            // Realiza las búsquedas simultáneamente
            const [peopleData, planetData] = await Promise.all([
                reqStarWarsPeople(searchTerm),
                reqStarWarsPlanets(searchTerm)
            ]);

            // Actualiza el estado con los resultados encontrados
            if (peopleData.results.length > 0) {
                setCharacter(peopleData.results[0]);
            } else {
                setCharacter(null);
            }

            if (planetData.results.length > 0) {
                setPlanet(planetData.results[0]);
            } else {
                setPlanet(null);
            }

        } catch (err) {
            console.error("Error fetching data:", err);
            setCharacter(null);
            setPlanet(null);
        }
    };

    return {
        handleGetStarWars,
        character,
        planet,
    };
};