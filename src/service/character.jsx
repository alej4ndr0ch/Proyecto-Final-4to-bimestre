export const reqStarWarsPeople = async (searchTerm) => {
    const resp = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}`);
    const data = await resp.json();
    return data;
}

export const reqStarWarsPlanets = async (searchTerm) => {
    const resp = await fetch(`https://swapi.dev/api/planets/?search=${searchTerm}`);
    const data = await resp.json();

    if (data.results.length > 0 && data.results[0].residents.length > 0) {
        const residentsPromises = data.results[0].residents.map(url => fetch(url).then(res => res.json()));
        
        const residentsData = await Promise.all(residentsPromises);
        
        data.results[0].residentNames = residentsData.map(resident => resident.name);
    } else {
        data.results[0].residentNames = [];
    }

    return data;
};