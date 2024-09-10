export const reqStarWarsPeople = async (searchTerm) => {
    const resp = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
    const data = await resp.json();
    return data;
}

// Búsqueda de planetas
export const reqStarWarsPlanets = async (searchTerm) => {
    const resp = await fetch(`https://swapi.dev/api/planets/?search=${searchTerm}`);
    const data = await resp.json();
    return data;
}