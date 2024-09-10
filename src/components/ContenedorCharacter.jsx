export const ContenedorCharacter = ({ character, planet }) => {
    return (
        <div className="container">
            {!character && !planet && (
                <div className="text-center mt-5">
                    <h5 className="text-white">No se encontró el personaje o el planeta</h5>
                </div>
            )}

            {character && (
                <div className="p-3 mb-2 bg-warning text-dark" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Personaje: {character.name}</h5>
                        <p>Altura: {character.height} cm</p>
                        <p>Peso: {character.mass} kg</p>
                    </div>
                </div>
            )}

            {planet && (
                <div className="p-3 mb-2 bg-warning text-dark" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Planeta: {planet.name}</h5>
                        <p>Clima: {planet.climate}</p>
                        <p>Diámetro: {planet.diameter} km</p>
                        
                        <p>Residentes:</p>
                        {planet.residentNames.length > 0 ? (
                            <ul>
                                {planet.residentNames.map((resident, index) => (
                                    <li key={index}>{resident}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No hay residentes en este planeta.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}