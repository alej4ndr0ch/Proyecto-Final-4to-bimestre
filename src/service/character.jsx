export const reqStarWars = async (character) => {
    try {
        const resp = await fetch(`https://swapi.dev/api/people/${character}`)
        const data = await resp.json()
        return data
    } catch (err) {
        console.error(err)
        throw err
    }
}